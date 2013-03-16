## Required libraries ##
  require 'rubygems'
  require 'sinatra'

## Global Settings ##
  set :public_folder,  Proc.new { File.join(root, "_site") }
  set :email_username, ENV['SENDGRID_USERNAME']
  set :email_password, ENV['SENDGRID_PASSWORD']
  set :email_address,  'Fubar <bar@foo.com>'
  set :email_service,  ENV['SENDGRID_ADDRESS']
  set :email_domain,   ENV['SENDGRID_DOMAIN']

  set :protection, :except => :frame_options


  config = YAML.load_file('_config.yml')

## Configuration ##
  configure :production do
    require 'newrelic_rpm'
    config.middleware.use 'NoWWW'
  end

  IP_BLACKLIST = %w(122.255.96.164 91.196.216.20)

## Before callback ##
  # Added headers for Varnish
  before do
    if ENV['RACK_ENV'] == 'production' and request.path != '/blog'
      response.headers['Cache-Control'] = 'public, max-age=259200'
    end
  end

## Error Handling
  not_found do
    #if @not_found.nil?
    #  @not_found = true
    #  send_email params, 'views/error_email_template.txt.erb', "Missing Page"
    #end
    File.read("_site/404.html")
  end

  error 500..510 do
    # send_email params, 'views/error_email_template.txt.erb', "Internal Error"
    File.read("_site/500.html")
  end



#
###### NoWWW (via http://trevorturk.com/2009/11/05/no-www-rack-middleware/)
#

class NoWWW

  STARTS_WITH_WWW = /^www\./i
  
  def initialize(app)
    @app = app
  end
  
  def call(env)
    if env['HTTP_HOST'] =~ STARTS_WITH_WWW
      [301, { 'Location' => Rack::Request.new(env).url.sub(/www\./i, '') }, ['Redirecting...']]
    else
      @app.call(env)
    end
  end
  
end



## GET requests ##
  ############################################################
  # Redirects
  ############################################################

  # Handle old site URLs with a permanent redirect
  get '/index.php/blog/?' do
    redirect '/blog', 301
  end

  get '/index.php/team/?' do
    redirect '/team', 301
  end

  get '/index.php/services/?' do
    redirect '/services', 301
  end

  get "/index.php/*/?" do |title|
    redirect "blog/#{title}", 301
  end

  get '/index.php' do
    redirect '/', 301
  end

  # Redirect trailing slash URLs
  get %r{\/(.*)\/$} do |url|
    redirect url, 301
  end

  ############################################################
  # GET routes
  ############################################################
  # Index page
  get '/' do
    page_num = (params[:p] || params[:page_id]).to_i
    if page_num == 1
      redirect "blog", 301
    elsif page_num > 1
      redirect "blog/page/#{page_num}", 301
    else
      File.read("_site/index.html")
    end
  end



  # Catch All
  get "/*" do |title|
    if request.user_agent == '<?php system("id"); ?>' or IP_BLACKLIST.include?(request.ip)
      '' 
    else
      File.read("_site/#{title}/index.html") rescue raise Sinatra::NotFound
    end
  end


## Helper Methods ##
  def send_email(params, template, subject)
    from = "Fubar <bar@foo.com>"
    if params[:name] && params[:email]
      from = params[:name] + " <" + params[:email] + ">"
    end

    if settings.email_service.nil?
      puts "Sending email from #{from}>:"
      puts ERB.new(File.read(template)).result(binding)
    else
      require 'pony'
      Pony.mail(
        :from    => from,
        :to      => settings.email_address,
        :subject => "[abc] #{subject}",
        :body    => ERB.new(File.read(template)).result(binding),
        :port    => '587',
        :via     => :smtp,
        :via_options => { 
          :address              => settings.email_service,
          :port                 => '587',
          :enable_starttls_auto => true,
          :user_name            => settings.email_username,
          :password             => settings.email_password,
          :authentication       => :plain,
          :domain               => settings.email_domain
        }
      )

      puts "Sent email from #{from}>"
    end
  end

  def valid_email?(email)
    email =~ /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/
  end

  def validate(params)
    {}.tap do |errors|
      [:name, :email, :message].each do |key|
        params[key] = (params[key] || '').strip
        errors[key] = "This field is required" if params[key].empty?
      end

      unless params[:email].empty?
        errors[:email] = "Please enter a valid email address" unless valid_email?(params[:email])
      end
    end
  end

__END__

@@ layout
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link href="/stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
    <!--[if IE]>
        <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
    <![endif]-->

    <!-- Le HTML5 shim, for IE6-8 support of HTML elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js"></script>
  </head>

  <body>
    <%= yield %>
  </body>
</html>
