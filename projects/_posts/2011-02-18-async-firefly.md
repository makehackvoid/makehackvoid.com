---
layout: post
title: ASync-Firefly
permalink: projects/async-firefly/
excerpt: An Analog Synchronising Firefly very heavily inspired by the Synchronising Firefly kit from Alex at Tinkerlog.
thumbnail: /files/projects/async-firefly/thumbnail.jpg

---

The ASync-Firefly is an Analog Synchronising Firefly very heavily inspired by the [Synchronising Firefly kit](http://store.tinkerlog.com/store/index.php?main_page=product_info&cPath=2&products_id=2) from Alex at [Tinkerlog](http://tinkerlog.com/). I was inspired to see what it would take to replace the ATiny13 with common, off the shelf analog parts. My goals were to have no digital parts (which I failed at), using only through hole parts I could get from my local Jaycar (successful) and being able to use a single battery to run a string of kits (successful).

For those unfamiliar with Alex's kit; the basic premiss is that when you set up a few kits within range of each other they start of blinking randomly. As each kit detects flashes from their neighbours they adjust their phase slightly to try and synchronise themselves. It's a very nice example of self organising systems.

[![ASynch-Firefly on protoboard.](http://farm6.static.flickr.com/5013/5460089551_1956e01e22.jpg)](http://www.flickr.com/photos/58053205@N06/5460089551/)

Using a LM555 timer and an LM393 comparator, I have implemented the main features of Alex's kit. The LM555 provides the oscillator which blinks the LED every few seconds and the LM393, together with an LDR and a low pass filter detects sharp rises in the light level and provides the signal to adjust the phase. The phase shift is achieved by switching on a transistor which allows more current to flow from the capacitor through the discharge pin on the 555, this has the advantage of only effecting the off time of the 555 so when the ASync-Fireflies are in sync they stay there. At least in theory, the imprecise nature of the analog components means there's at least some drift which makes for a really nice visual display.

![](/files/projects/async-firefly/async-firefly.png)

For those wondering where the digital part is; it's in the 555 timer.

Here's a test video of one laid out on protoboard, one complete and one partially complete on a breadboard:

<iframe width="640" height="360" src="//www.youtube.com/embed/cxVXot_unxU?feature=player_embedded" frameborder="0" allowfullscreen="true"></iframe>
