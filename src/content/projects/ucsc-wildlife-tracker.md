---
title: "UCSC Wildlife Tracker — Crowdsourced Ecological Vision"
byline: "Gamifying field camera trap identification through ESP-style human consensus games."
briefDescription: "Engineered a cooperative citizen-science game at UCSC DANM in partnership with Environmental Studies, crowdsourcing species labeling across thousands of rugged camera trap photos to train ecological models."
category: "creative-tech"
archetype: "bespoke-creative-tech"
act: "act-5"
actNum: "ACT V"
startDate: "2009-09"
endDate: "2011-06"
dateRange: "2009 – 2011"
employer: "University of California, Santa Cruz (DANM)"
role: "Lead Systems Architect & Research Fellow"
year: 2010
featured: false
archive: true
showOnTimeline: true
heroImage: "/media/projects/ucsc-wildlife-tracker/3_m.jpg"
gallery:
  - "/media/projects/ucsc-wildlife-tracker/3_m.jpg"
  - "/media/projects/ucsc-wildlife-tracker/3_l.jpg"
  - "/media/projects/ucsc-wildlife-tracker/buzzard_m.jpg"
  - "/media/projects/ucsc-wildlife-tracker/buzzard_l.jpg"
  - "/media/projects/ucsc-wildlife-tracker/2_s.jpg"
tags: ["ecological-data", "crowdsourcing", "human-computation", "ucsc", "research", "gamification"]
metrics:
  - "Thousands of Field Camera Trap Photos Labeled"
  - "ESP Game Human Consensus Verification Model"
  - "Verified Santa Cruz Mountain Wildlife Corridors"
---

The Wildlife Tracker was an interdisciplinary human-computation experiment built in collaboration between the Digital Arts & New Media (DANM) program and the Environmental Studies department at UC Santa Cruz.

## 01 // The Sensory & Physical Brief
Years before off-the-shelf computer vision models existed to parse messy outdoor imagery, ecologists had tens of thousands of motion-sensor photos from cameras hidden across the rugged Santa Cruz Mountains. The photos were unindexed, poorly lit, and filled with false triggers (windblown branches, night shadows). The challenge was to crowdsource verified ground-truth species labels without paying expensive manual labor.

## 02 // Bespoke Hardware & Algorithmic Stack
* **Human-Computation Consensus Protocol:** Drawing inspiration from Luis von Ahn's "ESP Game" and "Games for Good," I engineered a two-player cooperative game inside Facebook. Two anonymous players were shown the same camera-trap photo simultaneously without communication channels. When their descriptive tags matched, they scored points.
* **Ground-Truth Consensus Engine:** Implemented backend consensus algorithms that validated agreed-upon tags against taxonomic dictionaries, filtering spam while creating verified ML training labels.

## 03 // Live Deployment & What Broke
Field photos from motion-sensor cameras in deep redwood forests were chaotic: blinding sun streaks, night IR grain, and graphic wildlife behavior—including a particularly gnarly series of a vulture tearing into a mountain carcass. Handling real-time player matchmaking inside the early Facebook Canvas API required constant tuning of latency buffers and session timeouts to keep asynchronous players in sync.

## 04 // Breakthroughs, IP & Cultural Legacy
The game crowdsourced scientific-grade classifications across thousands of field images, enabling UCSC ecologists to map critical mountain lion and predator movement corridors across the Santa Cruz Mountains. It gave me early hands-on mastery of human-in-the-loop validation—a discipline that later became central to evaluating modern frontier LLM systems.
