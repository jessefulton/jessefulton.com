---
title: EmoTe
id: emote
template: project.jade
date: 2009

tags: [web, api, sentiment-analysis]

externalURL: http://www.emotivetext.com/
---

FPO BriefDescription

The [EmoTe API]("http://www.emotivetext.com") (now [EmotiveText.com]("http://emotivetext.com")) is a web service based on the [Synesketch]("http://www.synesketch.krcadinac.com/wiki/index.php?title=Main_Page") Java API, which calculates the various types and levels of emotions in a given passage of text.
  
I wrote this PHP port of the Synesketch Java API, focusing on the `synesketch.emotion` package. I then exposed that functionality via a web API for platform-agnostic consumption.

This web API will allow artists, developers, and anybody else to create machines and software which can "feel." Since it is exposed as web service, any device with an internet connection can retrieve the processed data without adding any additional hardware or software.