---
title: "Visa RioPOOL — Olympic Rideshare AR Photobooth"
byline: "Real-time in-vehicle augmented reality and automated video dispatch uniting Olympic athletes and riders in Rio."
briefDescription: "Served as Technical Director for Visa RioPOOL at the Rio 2016 Olympic Games, engineering in-car real-time AR costume photobooths across UberPOOL vehicles to bridge language barriers for a global broadcast campaign."
category: "experiential-spatial"
archetype: "scaled-emerging-products"
act: "act-3"
actNum: "ACT III"
startDate: "2016-02"
endDate: "2016-09"
dateRange: "2016"
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

RioPOOL was a flagship co-branded activation between Uber and Visa for the Rio 2016 Olympic Games, using real-time computer vision in moving vehicles to connect strangers and Olympic athletes across language barriers.

## 01 // The Sensory & Physical Brief
Uber was launching UberPOOL globally and wanted to demonstrate how shared transit connects people from diverse cultures. The brief was to build an interactive in-vehicle AR photobooth: passengers climbing into the back seat saw real-time computer vision track their bodies, mapping animated Olympic costumes (divers, soccer players, weightlifters) onto their silhouettes, and dispatching polished social clips to their phones within seconds.

## 02 // Bespoke Hardware & Algorithmic Stack
* **In-Car Computer Vision & Depth Tracking:** Deployed 3D depth sensors and camera rigs into passenger headrests, running real-time skeletal tracking and low-latency OpenGL costume overlays.
* **Automated Video Ingestion & Delivery:** Built cloud rendering pipelines automatically stitching GoPro footage, AR overlays, and brand bumpers, dispatching MP4s via SMS, email, and Facebook Messenger within 60 seconds of trip completion.

## 03 // Live Deployment & What Broke
Deploying sensitive optical sensors into moving cabs in tropical Rio produced intense field engineering chaos:
* **The Optical Physics Hurdle:** Tropical sunlight washed out our infrared depth sensors. I calculated that we needed specialized optical UV/IR blocking film applied across all car windows to stabilize the depth field. When I explained this optical physics fix, the client lead famously remarked: *"Well, you're a fucking wizard aren't you Jesse, you just have it all figured out."*
* **The 3 AM Drill Hack:** Lab thermal tests assumed air-conditioned cabs, but Brazilian drivers rolled their windows down in 90% humidity, causing in-car tablet enclosures to thermal-throttle. Speaking zero Portuguese, I tracked down an Uber driver's brother at 3 AM to borrow an electric drill, hand-drilling ventilation holes into every enclosure while running mission control out of a dirt-floor room in a local strip mall.
* **Launch Morning Blackout:** On launch morning, while pulling a critical compiled binary from SF over spotty local broadband, the network flatlined—a local cleaner had unplugged our main router to plug in a vacuum. I plugged it back in, flashed the fleet, and went live.

## 04 // Breakthroughs, IP & Cultural Legacy
The activation launched simultaneously across Rio and nine global metropolitan centers in under six weeks, capturing spontaneous interactions between riders and Team Visa Olympians that anchored Visa's global Olympic broadcast campaigns.
