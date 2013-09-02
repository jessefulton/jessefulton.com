---
title: Webcam Navigation
id: webcam-navigation
template: project.jade
date: 2009

video: 6876564

thumbnail:
  src: images/webcam-navigation_s.jpg
  width: 224px
  height: 160px

externalURL: http://projects.jessefulton.com/playground/camera-based-navigation.html
---

This was a proof-of-concept to show that web page navigation may be accomplished through the use of a copmuter's built-in web camera.
  
I updated an existing flash motion-tracking project to expose camera image data to JavaScript. I then used that data to manipulate the web browser, giving the user control of their environment via their webcam. By moving your hand up or down, you can have the browser scroll in that same direction.
  
The next step is to implement "click" functionality, hopefully through the use of gesture recognition.
  
I have seen motion-tracking projects online before, but I have yet to find another which uses that motion-tracking to take control of the web browser.
  
This example demonstrates that any user with a webcam on their computer could theortically navigate the web without the use of obtrusive input devices, which could be a great (and inexpensive) way to allow those lacking fine motor skills to interact with computers.