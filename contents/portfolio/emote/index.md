---
title: EmoTe
id: emote
template: project.jade
date: 2009

tags: [web, api, sentiment-analysis]

links:
    "EmotiveText.com": http://www.emotivetext.com/
    "EmotiveText.com on Github": https://github.com/jessefulton/emotivetext.com
    "Original EmoTe Project": https://github.com/jessefulton/emote
---

A lightweight sentiment analysis web API built on top of the Synesketch Java library.

The [EmoTe API](http://www.emotivetext.com) (now [EmotiveText.com](http://emotivetext.com)) is a web service based on the [Synesketch]("http://www.synesketch.krcadinac.com/wiki/index.php?title=Main_Page") Java API, which calculates the various types and levels of emotions in a given passage of text.
  
I wrote this PHP port of the Synesketch Java API, focusing on the `synesketch.emotion` package. I then exposed that functionality via a web API for platform-agnostic consumption.

This web API will allow artists, developers, and anybody else to create machines and software which can "feel." Since it is exposed as web service, any device with an internet connection can retrieve the processed data without adding any additional hardware or software.