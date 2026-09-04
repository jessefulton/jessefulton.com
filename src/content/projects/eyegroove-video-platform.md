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

Eyegroove was a pioneering mobile video creation and augmented reality platform founded by renowned interactive computational artist Scott Snibbe. Working from a freezing, unheated San Francisco warehouse, I joined as Lead Backend Engineer to build and scale the cloud infrastructure and media processing engine.

### Solo Backend Architecture & Transcoding Pipelines
I engineered the entire distributed backend architecture solo from inception to **40,000 Daily Active Users (DAUs)** before expanding the engineering team:
- **Dual-Rendered Video Transcoding:** I ingested high-resolution raw video alongside OpenGL shader-rendered layers, executing real-time server-side compositing and transcoding across variable bitrates and resolutions for adaptive HLS streaming (from cellular 3G to broadband WiFi).
- **Acoustic Intelligence & Song Similarity:** I engineered audio-muxing pipelines and integrated multi-dimensional acoustic feature analysis to drive song recommendation and musical discovery algorithms.
- **The Concurrency Horror Bug:** Two years after leaving the company, I was called back to troubleshoot a critical cross-request data bleed. Over two weeks of rigorous forensic debugging, I isolated an undocumented framework behavior that dynamically mutated the scope of `this` from request-level to global server-level under high concurrency, leaking user avatar URLs across active sessions.

### Issued US Utility Patents & Meta Acquisition
The interaction architectures and media synchronization mechanisms co-invented at Eyegroove yielded **6 issued US Utility Patents**:
1. **[US10031921](https://patentimages.storage.googleapis.com/79/7f/89/eddaa4e967dd7b/US10031921.pdf)** (2018): *Methods and systems for storage of media item metadata*
2. **[US10002642](https://patentimages.storage.googleapis.com/4d/9d/8e/0797db550ad9eb/US10002642.pdf)** (2018): *Methods and devices for generating media items*
3. **[US9268787](https://patentimages.storage.googleapis.com/44/84/f5/f17376b186928e/US9268787.pdf)** (2016): *Methods and devices for synchronizing and sharing media items*
4. **[US9207857](https://patentimages.storage.googleapis.com/cb/31/8d/9e75b31776b79c/US9207857.pdf)** (2015): *Methods and devices for presenting interactive media items*
5. **[US9207844](https://patentimages.storage.googleapis.com/76/f7/bf/9e0762caa6e457/US9207844.pdf)** (2015): *Methods and devices for touch-based media creation*
6. **[US9116912](https://patentimages.storage.googleapis.com/b6/b2/05/30b15e82006751/US9116912.pdf)** (2015): *Methods and devices for modifying pre-existing media items*

In 2016, Eyegroove was acquired by Facebook (Meta), directly infusing its patent-backed video synthesis and gesture interaction paradigms into Instagram Stories, Reels, and Meta AR tools.
