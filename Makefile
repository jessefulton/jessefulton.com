in=./
out=./build
bin=./node_modules/wintersmith/bin

all: build

build: clean
	$(bin)/wintersmith build --output $(out)

compile:
	rm -rf node_modules/wintersmith/lib
	node_modules/coffee-script/bin/coffee \
		-o node_modules/wintersmith/lib \
		-b -c node_modules/wintersmith/src

heroku: compile build

preview:
	$(bin)/wintersmith preview
	
clean:
	if test -d $(out); then rm -rf $(out); fi