---
title: "Eyegroove — Mobile Video Platform & 6 US Patents"
byline: "Solo-architecting distributed media backends to 40k DAUs and inventing 6 US Utility Patents (Acquired by Facebook / Meta)."
briefDescription: "Served as Lead Back-End Engineer at Eyegroove, solo-engineering distributed media processing pipelines, adaptive HLS video transcoding, and co-inventing 6 issued US Utility Patents with interactive art pioneer Scott Snibbe prior to acquisition by Facebook."
category: "experiential-spatial"
archetype: "scaled-emerging-products"
act: "act-4"
actNum: "ACT IV"
startDate: "2013-10"
endDate: "2014-10"
dateRange: "Oct 2013 – Oct 2014"
employer: "Eyegroove (Acquired by Facebook / Meta)"
role: "Lead Back-End Engineer"
year: 2013
featured: true
archive: true
showOnTimeline: true
heroImage: "/media/projects/eyegroove-video-platform/Eyegroove-mockup1.png"
gallery:
  - "/media/projects/eyegroove-video-platform/Eyegroove-mockup1.png"
  - "/media/projects/eyegroove-video-platform/eyegroove-logo.png"
cloudinaryVideo: "https://res.cloudinary.com/jessefulton/video/upload/v1/projects/Eyegroove%20Promo.mp4"
tags: ["augmented-reality", "mobile-video", "distributed-systems", "acquisition", "patents", "hls-streaming"]
achievements:
  - "6 US Utility Patents in Interactive Media"
  - "Acquired by Facebook / Meta (2016)"
metrics:
  - "Solo-Engineered Cloud Backend to 40k DAUs"
  - "6 Core Issued US Utility Patents"
  - "Acquired by Facebook / Meta (Integrated into Instagram Reels)"
primaryLink: "https://en.wikipedia.org/wiki/Eyegroove"
youtubeId: "vAlNaQQ4RgU"
---

Eyegroove was an unpaved creative experiment founded by interactive computational artist Scott Snibbe. In 2013, before TikTok, Musical.ly, or Instagram Stories existed, we set out to build real-time interactive video with GPU shaders, gesture-driven timelines, and audio-reactive effects running directly on mobile hardware.

## 01 // The Sensory & Physical Brief
The premise was radical for mobile computing at the time: allow anyone to shoot, warp, and score musical micro-videos on their phone in real time. We operated out of an unheated San Francisco warehouse where my desk was parked right next to the bathroom door, hacking together real-time OpenGL shaders while wearing winter coats. The mobile experience had to feel tactile, musical, and instantaneous—no desktop rendering bars, no multi-minute export wait times.

## 02 // Bespoke Hardware & Algorithmic Stack
I joined as the lead backend engineer to build the distributed media architecture solo from the ground up:
* **Asynchronous Transcoding Matrix:** Built distributed transcoding pipelines ingesting raw camera footage and client-side shader compositions, processing them across dynamic bitrates and codecs for adaptive HLS delivery over fragile 3G and early LTE networks.
* **Acoustic Feature Extraction:** Engineered separate audio-muxing channels and integrated acoustic feature extraction algorithms to enable song similarity matching, tempo synchronization, and music recommendations.
* **Touch-First Gesture Interaction:** Collaborated closely with Scott Snibbe on the mathematical interaction paradigms bridging touch gesture choreography with real-time video filter synthesis.

## 03 // Live Deployment & What Broke
Scaling to 40,000 daily active users meant dealing with real-world infrastructure chaos. Two years after leaving the company, I was called back in to troubleshoot a phantom concurrency bug: during high-traffic viral spikes, user avatar URLs were mysteriously leaking across unrelated sessions. 

After two weeks of deep stress-testing, I traced the root cause to an undocumented framework behavior: under specific race conditions, the execution scope flipped silently from session-level to global server-level. Incoming requests were assigning image URLs to `this.profile_url`, causing concurrent threads to overwrite each other’s profile pointers in shared server memory. Fixing the scoping logic permanently sealed the leak.

## 04 // Breakthroughs, IP & Cultural Legacy
The foundational interaction design and synchronization systems we developed resulted in **6 issued US Utility Patents**:
1. **[US10031921](https://patentimages.storage.googleapis.com/79/7f/89/eddaa4e967dd7b/US10031921.pdf)** (2018): *Methods and systems for storage of media item metadata*
2. **[US10002642](https://patentimages.storage.googleapis.com/4d/9d/8e/0797db550ad9eb/US10002642.pdf)** (2018): *Methods and devices for generating media items*
3. **[US9268787](https://patentimages.storage.googleapis.com/44/84/f5/f17376b186928e/US9268787.pdf)** (2016): *Methods and devices for synchronizing and sharing media items*
4. **[US9207857](https://patentimages.storage.googleapis.com/cb/31/8d/9e75b31776b79c/US9207857.pdf)** (2015): *Methods and devices for presenting interactive media items*
5. **[US9207844](https://patentimages.storage.googleapis.com/76/f7/bf/9e0762caa6e457/US9207844.pdf)** (2015): *Methods and devices for touch-based media creation*
6. **[US9116912](https://patentimages.storage.googleapis.com/b6/b2/05/30b15e82006751/US9116912.pdf)** (2015): *Methods and devices for modifying pre-existing media items*

In August 2016, Eyegroove was acquired by Facebook (Meta), infusing our real-time video shader pipelines, touch manipulation IP, and interactive media patents into Instagram Stories, Reels, and Meta AR cameras.
