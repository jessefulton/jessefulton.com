---
title: "Eyegroove — Mobile Video Platform & 6 US Patents"
byline: "Solo-architecting distributed media backends to 40k DAUs and inventing 6 US Utility Patents (Acquired by Facebook / Meta)."
briefDescription: "Served as Lead Back-End Engineer at Eyegroove, solo-engineering distributed media processing pipelines, adaptive HLS video transcoding, and co-inventing 6 issued US Utility Patents with interactive art pioneer Scott Snibbe prior to acquisition by Facebook."
category: "experiential-spatial"
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

Eyegroove was a visionary mobile creative platform founded by interactive computational artist Scott Snibbe. We were building real-time OpenGL shaders and audio-reactive video filters on mobile phones long before AR lenses were everywhere. I was honored to work closely with Scott, who was one of my long-time creative idols, even if our headquarters was an unheated San Francisco warehouse and my desk was parked directly outside the bathroom.

### Solo Backend Architecture & Transcoding Pipelines
I joined as the lead backend engineer and built the entire distributed infrastructure solo from scratch, scaling it to 40,000 daily active users before bringing on additional engineering help.

Our media processing pipelines were intense. We had to ingest large video uploads, store both raw video and shader-rendered compositions, and transcode them across a demanding matrix of bitrates, codecs, and resolutions for adaptive HLS streaming over spotty 3G cellular and WiFi connections. We also ran separate audio-muxing channels and integrated multi-dimensional acoustic feature extraction to power song similarity search and music recommendations. 

The foundational interaction design and synchronization systems we developed yielded **6 issued US Utility Patents** covering touch choreography, media modification, and metadata persistence:
1. **[US10031921](https://patentimages.storage.googleapis.com/79/7f/89/eddaa4e967dd7b/US10031921.pdf)** (2018): *Methods and systems for storage of media item metadata*
2. **[US10002642](https://patentimages.storage.googleapis.com/4d/9d/8e/0797db550ad9eb/US10002642.pdf)** (2018): *Methods and devices for generating media items*
3. **[US9268787](https://patentimages.storage.googleapis.com/44/84/f5/f17376b186928e/US9268787.pdf)** (2016): *Methods and devices for synchronizing and sharing media items*
4. **[US9207857](https://patentimages.storage.googleapis.com/cb/31/8d/9e75b31776b79c/US9207857.pdf)** (2015): *Methods and devices for presenting interactive media items*
5. **[US9207844](https://patentimages.storage.googleapis.com/76/f7/bf/9e0762caa6e457/US9207844.pdf)** (2015): *Methods and devices for touch-based media creation*
6. **[US9116912](https://patentimages.storage.googleapis.com/b6/b2/05/30b15e82006751/US9116912.pdf)** (2015): *Methods and devices for modifying pre-existing media items*

In 2016, Eyegroove was acquired by Facebook (Meta), directly infusing its patent-backed video interaction paradigms and real-time shader pipelines into Instagram Stories, Reels, and Meta AR tools.

### The Phantom Concurrency Bug
The wildest engineering story happened two years after I had left the company. I was called back in to help debug a critical issue where user avatar URLs were mysteriously leaking into other people's live sessions during high-traffic spikes.

I spent two weeks testing, stress-testing, and isolating the issue. The culprit turned out to be an undocumented (yet intentional) behavior in the web framework itself: under specific conditions, the execution scope shifted from session-level to global server-level, silently changing the meaning of the `this` keyword. Because middleware was assigning media URLs to `this.profile_url`, incoming concurrent requests were overwriting each other’s values at the server level. Fixing it permanently closed the leak.
