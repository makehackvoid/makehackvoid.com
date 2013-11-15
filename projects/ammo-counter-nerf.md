---
layout: default
title: Ammo Counter for Nerf Gun
permalink: projects/ammo-counter-nerf/
category: projects
excerpt: The ammo counter, the most ubiquitous and humble of FPS game elements, but completely absent from Nerf combat (apart from some transparent magazines). I decided to remedy this!

---

*wil5on — Tue, 21/06/2011 - 12:58pm*

The ammo counter, the most ubiquitous and humble of FPS game elements, but completely absent from Nerf combat (apart from some transparent magazines). I decided to remedy this!

I've taken a Nerf Stampede (electric, fully automatic, clip-fed) and added an IR light gate to detect shots, broken out one of the clip insertion interlock switches to detect reloading, and added a display for the count, with an Arduino to act as the brains.

![Nerf Gun](/assets/projects/ammo-counter-nerf/nerfgun.jpg)

My first attempt had the light gate at the front of the barrel, and a 16x2 LCD for display. This worked fine when tested at the space, but both of these elements failed completely in sunlight.

![Barrel](/assets/projects/ammo-counter-nerf/barrel.jpg)

For the next prototype, I internalised the sensor by drilling a hole through the barrel and covering the barrel with dark tape (since Nerf plastic transmits some light). I also switched to a simpler 7-segment LED display which should be easier to read and looks cooler.

![Prototype](/assets/projects/ammo-counter-nerf/prototype.jpg)

See a video at: [flic.kr/p/9V4W9T](flic.kr/p/9V4W9T)