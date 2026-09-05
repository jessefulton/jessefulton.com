---
title: "Sage Summit — Interactive Curved Walls & 360° Marquee"
byline: "30-foot interactive curved mega-canvas, VR pre-vis, and floating 360-degree seamless digital ring in New Orleans."
briefDescription: "Engineered experiential showpiece installations at Sage Summit in New Orleans, pre-visualizing in VR, driving Resolume video servers via WebSockets/OSC, and rendering a 360-degree seamless floating marquee."
category: "experiential-spatial"
client: "Sage"
employer: "JUXT"
role: "Technology Director"
year: 2015
featured: false
archive: true
showOnTimeline: true
heroImage: "/media/projects/sage-summit/11794375_808478369249650_8352536067187652371_o.jpg"
gallery:
  - "/media/projects/sage-summit/11794375_808478369249650_8352536067187652371_o.jpg"
cloudinaryVideo: "https://res.cloudinary.com/jessefulton/video/upload/v1/projects/Sage%20Summit%202015.mp4"
tags: ["resolume", "osc", "websockets", "vr-previs", "spatial-systems", "interactive-installations"]
metrics:
  - "30' x 10' Curved Touch Canvas with Full Idle Takeover"
  - "VR Spatial Pre-Visualization & Pixel Calibration"
  - "15' Floating 360° Seamless Marquee & Local Edge DB"
---

At Sage Summit in New Orleans, I directed technology across two major architectural installations, taking traditionally dry corporate accounting themes and turning them into vibrant, dynamic spatial experiences.

### 30-Foot Curved Canvas & VR Pre-Visualization
Our main attraction was a massive 30' x 10' curved interactive display fronted by three standalone touchscreen stations. During active use, attendees explored independent interactive workflows; during idle mode, all three stations unified into a single synchronized 30-foot panoramic video takeover.

Because we lacked a physical warehouse large enough to stage and test a 30-foot curved display before shipping to Louisiana, my team and I built the entire convention hall footprint in 3D. We used VR headsets to walk the virtual floor, testing asset sizing, sightlines, and typography against the low-density pixel pitch of the physical panels. We connected the touchscreen web applications to Resolume media servers via WebSockets and OSC control messages, managing multi-channel video playback and looping smoothly.

### The 15-Foot Seamless 360° Floating Marquee
Our second installation was an unassuming, 15-foot-diameter cylindrical display ring suspended above the central information hub. 

Because the screen was a continuous loop with no physical seams, we wrote custom rendering drivers to wrap and animate web content seamlessly—animating cards vertically onto the ring, then orbiting them 360 degrees horizontally with zero edge artifacts. 

Convention Wi-Fi is notoriously unstable, so we deployed a local-first on-site database and CMS. We ingested live Twitter hashtags, dynamic conference schedule updates, and marketing announcements locally, giving the Sage team a real-time moderation dashboard that operated completely uninterrupted by flaky venue internet.
