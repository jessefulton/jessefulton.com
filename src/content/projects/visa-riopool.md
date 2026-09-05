---
title: "Visa RioPOOL — Olympic Rideshare AR Photobooth"
byline: "Real-time in-vehicle augmented reality and automated video dispatch uniting Olympic athletes and riders in Rio."
briefDescription: "Served as Technical Director for Visa RioPOOL at the Rio 2016 Olympic Games, engineering in-car real-time AR costume photobooths across UberPOOL vehicles to bridge language barriers for a global broadcast campaign."
category: "experiential-spatial"
client: "Visa / Uber"
employer: "AKQA"
role: "Group Technical Director"
year: 2016
featured: false
archive: true
showOnTimeline: true
heroImage: "/media/projects/visa-riopool/RioPOOL_hero_LG.jpg"
gallery:
  - "/media/projects/visa-riopool/RioPOOL_hero_LG.jpg"
cloudinaryVideo: "https://res.cloudinary.com/jessefulton/video/upload/v1/projects/Visa%20RioPOOL%20Case%20Study.mp4"
tags: ["augmented-reality", "computer-vision", "in-vehicle-tech", "olympics", "uber", "visa", "experiential"]
metrics:
  - "Global Rio 2016 Launch Across 9 International Metropolises"
  - "In-Vehicle Real-Time Body Tracking & AR Filters"
  - "Automated Social Video Generation & Dispatch Pipeline"
---

RioPOOL was a major cobranded campaign between Uber and Visa for the Rio 2016 Olympic Games. Uber was launching its rideshare mode globally and wanted to show how sharing a ride could connect people from different cultures, even if they couldn't speak a word of each other's language.

### The In-Car AR Experience
To break the language barrier, we built an interactive AR photobooth inside UberPOOL cabs. When passengers got into the back seat, they looked into an in-car screen where real-time computer vision tracked their bodies and mapped digital Olympic costumes—divers, soccer players, weightlifters—directly onto their silhouettes. 

Riders could record short video clips dispatched instantly to their email or Facebook Messenger accounts. We filmed dozens of these experiences with GoPros, staging ridealongs with Team Visa medalists that became the centerpiece of global television and digital ad campaigns.

### High-Stakes Field Engineering in Rio
Deploying sensitive computer vision hardware into moving cabs in tropical Rio de Janeiro produced unforgettable field engineering challenges:

- **The Optical Physics Hurdle:** Our 3D depth sensors relied on infrared light, which went haywire moving between blinding tropical sun, shadows, and tunnels. When I explained that we had to source and install specialized optical UV/IR film across all vehicle windows to stabilize the depth tracking, our client stakeholder exclaimed: *"Well, you're a fucking wizard aren't you Jesse, you just have it all figured out?"*
- **The 3 AM Drill Hack:** Lab thermal testing had assumed air-conditioned cars, but Brazilian drivers kept their windows down in the humidity. In-car screens began overheating and shutting down. Speaking zero Portuguese, I tracked down an Uber driver's brother at 3 AM to borrow a power drill, then hand-drilled custom ventilation holes into every enclosure while running mission control out of an unfloored dirt room in a strip mall.
- **The Launch Morning Router Crisis:** On launch morning, while downloading a critical remote patch binary from San Francisco over slow local bandwidth, the connection suddenly flatlined—a local janitor had unplugged our main router in the dirt room. I plugged it back in, deployed the update, and we launched on schedule across Rio and nine other global cities in under six weeks.
