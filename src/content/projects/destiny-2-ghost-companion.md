---
title: "Destiny 2 Ghost — Alexa Voice Companion"
byline: "First-ever voice companion integrated with a live AAA console game ecosystem."
briefDescription: "Architected the Destiny 2 Ghost Alexa Skill and IoT hardware companion for Activision and Bungie, pioneering voice UX in gaming and winning Cannes Silver Lion, Gold Clio, and presenting at GDC."
category: "frontier-ai"
archetype: "bespoke-creative-tech"
act: "act-3"
actNum: "ACT III"
startDate: "2017-01"
endDate: "2018-03"
dateRange: "2017 – 2018"
client: "Activision / Bungie"
employer: "AKQA"
role: "Group Technical Director / Creative Tech Director"
year: 2017
featured: true
archive: true
showOnTimeline: true
heroImage: "/media/projects/destiny-2-ghost-companion/hero-02.jpg"
gallery:
  - "/media/projects/destiny-2-ghost-companion/hero-02.jpg"
  - "/media/projects/destiny-2-ghost-companion/hero-01.jpg"
  - "/media/projects/destiny-2-ghost-companion/hero-03.jpg"
cloudinaryVideo: "https://res.cloudinary.com/jessefulton/video/upload/v1/projects/Destiny%202%20Ghost%20Skill%20Case%20Study.mp4"
tags: ["voice-ux", "alexa", "real-time-api", "conversational-ai", "gaming", "iot", "gdc"]
achievements:
  - "Cannes Silver Lion (Innovation in Voice)"
  - "Gold Clio Award (Apps - Games)"
  - "Silver Clio Award (Innovation - Games)"
  - "Project Isaac Gold Award (Voice Invention)"
  - "GDC 2018 Speaker (Voice UX Design)"
metrics:
  - "Millions of Real-Time Player Invocations"
  - "Dynamic Multi-Million Response Engine"
  - "First Physical IoT & Live Game Sync"
primaryLink: "https://www.akqa.com/work/activision/destiny-2-ghost-skill/"
youtubeId: "86UlSLgyAVk"
---

The Destiny 2 Ghost Skill was the world's first voice companion integrated directly into a live AAA console gaming ecosystem, connecting Amazon Alexa to millions of players across Activision and Bungie's global servers.

## 01 // The Production Frontier & Regulatory Stakes
In 2017, conversational voice interfaces in gaming were entirely unexplored territory. Gamers expect zero-latency responsiveness and deep lore authenticity. The mandate was to enable players to talk naturally to their in-game AI companion (Ghost, voiced by Nolan North) in their living rooms, managing character loadouts, checking clan milestones, and requesting tactical advice in real time.

## 02 // Systems Architecture & Data Plumbing
* **Real-Time Bungie API Integration:** Built a high-throughput middleware bridge authenticating player Xbox, PlayStation, and PC accounts via OAuth, executing low-latency inventory calls against Bungie's live player state API.
* **Dynamic Response Engine:** Engineered a conversational engine synthesizing thousands of recorded dialogue stems into millions of contextually aware voice responses, factoring in player subclass, active planetary location, and progression level.
* **WiFi-Connected IoT Hardware:** Collaborated with hardware manufacturers to engineer a standalone, illuminated WiFi-connected physical Ghost replica synchronized via WebSockets to in-game audio and voice events.

## 03 // The Engineering Crucible
The critical challenge was designing around Bungie's strict competitive balance constraints. To maintain integrity during competitive Player-versus-Player (PvP) matches and high-stakes Raids, Bungie's API strictly forbade in-combat inventory swapping. If a player screamed at Ghost for a rocket launcher mid-firefight, the API returned a hard lock error. Rather than exposing sterile API error codes, we architected dynamic conversational fallback logic: Ghost delivered witty, in-character banter chastising the player to keep their focus on the battle.

## 04 // Hard Performance & Defensibility
The Ghost skill processed millions of live voice invocations with sub-second roundtrip latency, establishing the foundational design patterns for conversational interfaces in entertainment. The project earned a **Cannes Silver Lion for Innovation in Voice**, **Gold and Silver Clio Awards**, the **Project Isaac Award for Invention**, and led to our featured presentation on Voice UX design at the **Game Developers Conference (GDC 2018)**.
