---
layout: default
title: Space Probe
permalink: projects/space-probe/
category: projects
excerpt: Need to tell people when the Hackerspace is open for hacking? Use the Space Probe! It tweets & emails to let people know when the space opens and closes.

---

*angusgr — Sat, 21/05/2011 - 1:51pm*

Need to tell people when the Hackerspace is open for hacking? Use the Space Probe! It [tweets](http://twitter.com/makehackvoid) & [emails](http://www.makehackvoid.com/mailman/listinfo/makers) to let people know when the space opens and closes.

Before we had the Space Probe, people would write to the mailing list - but it's easy to forget to email, especially if you came in to work on non-computer-centric projects or if you need to leave in a hurry.

Here is a video about using the Space Probe:

<iframe width="480" height="390" src="//www.youtube.com/embed/7_1P8PqnoWg" frameborder="0" allowfullscreen="true"></iframe>


Technical Summary
-----------------

The Space Probe is made out of a laboratory power supply that I spotted in a dumpster and looks like this:

![Space Probe](/assets/projects/space-probe/spaceprobe.jpg)

Inside the probe enclosure is an Arduino clone wired in and using a [Freetronics EtherTen](http://www.freetronics.com/products/etherten) as an HTTP server, for a simple web API ([More info](http://www.makehackvoid.com/pipermail/makers/2012-December/004334.html)). On the router is a program written in Lua, which performs all of the probe's functions. [Source code is all online here](http://github.com/makehackvoid/mhv-space-probe).

The server-side portion of the Space Probe configuration at MHV is [documented on the space wiki](http://space.makehackvoid.com/wiki/ServerConfig#Space_Probe).

-----------------------

**Issue tracker**
*voltagex — Wed, 23/11/2011 - 8:37pm*
As well as pestering Angus directly, you can pester him on GitHub: [https://github.com/makehackvoid/MHV-Space-Probe](https://github.com/makehackvoid/MHV-Space-Probe)