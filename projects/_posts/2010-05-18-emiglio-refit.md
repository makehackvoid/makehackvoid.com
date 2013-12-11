---
layout: default
title: Emiglio Refit
permalink: projects/emiglio-refit/
excerpt: Refitting an Emiglio/Scooter robot with new control systems.

---

*Adam — Tue, 18/05/2010 - 11:08am*

## Intro ##

At Make, Hack, Void we have started working on refitting an Emiglio/Scooter robot with new control systems. He was bought as a gift for one of our members from a market stall and is missing his controller. The hope to be able to extend his functionality beyond the standard factory controls while still maintaining as much of his appearance as possible.

![Taken apart](/assets/projects/emiglio-refit/emiglio.jpg)

Recently we spent an afternoon taking it apart to see what we can fit inside. Our initial hopes were to be able to fit a netbook or hacked Internet router inside the body to interface with sensors and actuators. During the tear down day it was determined that an EEE701 would comfortably fit inside the main body. We are also now considering using an ARM based development board like the [Blueboard-AT91RM9200](http://shop.ngxtechnologies.com/product_info.php?products_id=72&osCsid=ea842a35dd75bc709b06c001cf8e8687) from NGX or re-purposing an old iPaq we had laying around.

Angus took a bunch of photos on the [Emiglio teardown day](http://www.flickr.com/photos/angusgr/sets/72157623848870449/) including a bunch of shots of [Emiglio's internals](http://www.flickr.com/photos/angusgr/sets/72157623973215032/)

## Current Status ##

### Drive System ###

On the tear down day we attempted to put hook up a pair of H-Bridge motor drivers to the two motors in Emiglio's base which are setup in a differential steering layout but the only H-Bridges we had needed a supply voltage >= +10v and we didn't have enough power resistors to step the output voltage down enough to not fry the 6v motors in the base.

Jack put together a pair of H-Bridges with direction control on a piece of proto board and soldered on a bunch of fly leads. He brought it along to our next meeting and we were able to solder the relevant leads to the motor terminals, battery pack and plug the logic level lines into an Arduino Duemilanove we had laying around.

With the base fully separated from the body we set about testing the motor controller. We loaded some dumb code into the Duemilanove to just pulse each of the motor direction control pins for 1 second. After a quick test with the Duemilanove still pulling power from a laptop and the base propped up the wheels weren't touching the table we tucked the Duemilanove and the cables into the robot base. Plugging the positive lead from the 6v battery pack into the Duemilanove's gave less than stellar results; nothing happened. We soon realised that the Duemilanove's voltage regulator needs +7v to actually do anything. It was decided that we'd throw caution into the wind and plug the 6v battery pack into the 5v line of the Duemilanove board. This met some resistance from the owner of the board but that subsided after there were offers of replacement Atmega328p chips should something go really wrong.

It didn't go as well as we had hoped...

<iframe width="640" height="360" src="//www.youtube.com/embed/FblgAup3kF8?feature=player_embedded" frameborder="0" allowfullscreen="true"></iframe>

...but we had a plan!

<iframe width="640" height="360" src="//www.youtube.com/embed/UHihTrK7bEM?feature=player_embedded" frameborder="0" allowfullscreen="true"></iframe>

It's a start anyway.

## Future Plans ##

We have lots of plans for Emiglio including some 3W RGB LEDs to mount in the eye sockets and head lamps; motorised control of the arms; replacement grippers; a Linux capable central computer for localisation & navigation, text to speech, image processing and anything else we think Emiglio might like to be able to do.