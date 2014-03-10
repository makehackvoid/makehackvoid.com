---
layout: post
title: RFID Access For Locker - Journal
permalink: projects/rfid-locker/
excerpt: It took me a little a few hours and couple brews to install the lock. The whole assembly fit's quite nicely on the inside of the door, and the RFID action is quite reliable. Next step, RFID the rolling shed doors!
thumbnail: /files/projects/rfid-locker/thumbnail.jpg
author: ausrobotics
---

*Australian Robotics — Sat, 12/02/2011 - 6:21pm*

![Locker Done](/files/projects/rfid-locker/rfidLockerDone.jpg)

21 Feb 2011- Monday

It took me a little a few hours and couple brews to install the lock. The whole assembly fit's quite nicely on the inside of the door, and the RFID action is quite reliable. Next step, RFID the rolling shed doors!

![rfid with tag and Arduino](/files/projects/rfid-locker/rfidWithTagArduino.jpg)

20 Feb, 2011 - Sunday

Here's a picture of the internals of the RFID access system ready to be mounted in. The bright light is a 12v lamp that's a placeholder for the solenoid in the locker. The RFID circuit has been built from the [Freetronics RFID Lock Shield kit](http://www.australianrobotics.com.au/?q=rfidLockKit) and allows for a 12v door strike to be controlled with Arduino. The shield also features an onboard voltage regulator to power the Arduino from the 12v solenoid/strike power source. Beautifully hacked into top of the shield is a small analog beeper that gives me a tone when access is granted!

![Solenoid](/files/projects/rfid-locker/solenoid.jpg)

![Front of Locker](/files/projects/rfid-locker/lockerFront.jpg)

12 Feb 2010 - Saturday

I've installed a 12v solenoid bolt on the inside of my locker as the first step of making the locker RFID accessible. As reliability is always of utmost importance in access control and locking, this was the first proof of concept for the project. After some primitive plastic fabrication, ear-bursting drilling and 12v later, the solenoid is locking the locker successfully in a fail-safe mode. In the case of a power failure a fail-safe design will remain locked. Props to Alastair for the cool acrylic laser cut which is now a sign for the locker. Next step...RFID, Bluetooth...Wifi? 


