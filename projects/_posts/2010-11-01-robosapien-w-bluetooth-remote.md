---
layout: default
title: Robosapien w/ Bluetooth remote control
permalink: projects/robosapien-w-bluetooth-remote/
excerpt: This is about a Sunday afternoon spent attaching a Seeeduino (Arduino clone) and a Bluetooth serial module to the Robosapien, then remote controlling him from a Python shell.

---

*angusgr — Mon, 01/11/2010 - 6:57pm*

Robosapien was a toy robot released back in 2003. One of the neat things about these robots is that the manufacturer designed them for easy hackability.

This is about a Sunday afternoon spent attaching a Seeeduino (Arduino clone) and a Bluetooth serial module to the Robosapien, then remote controlling him from a Python shell.

![Robo Sapiens + Seeeduino](/assets/projects/projects/robosapien-w-bluetooth-remote/robosapien.jpg)

Introduction
------------

I was given a Robosapien months ago, but I  hadn't done anything with it. Then I met Andrew Moss at the MHV Meetup, with his Robosapien. Andrew wants to use Robosapien to teach robotics to Year 11 & 12 students. He was having trouble deciphering the IR codes from the Robosapien's remote control. My interest was piqued!

The Robosapien has an IR receiver in his head, which sends signals to the main board in his back. I tapped into the IR line so I could inject my own signals onto the wire. This technique has been done many times before, and it's quite well documented on the [Arduino playground](http://www.arduino.cc/playground/Main/RoboSapienIR).

Getting Inside
--------------

Getting to the main control board is very easy. Begin by undoing the four screws on Robosapien's back:

![Robosapiens Back Panel](/assets/projects/robosapien-w-bluetooth-remote/backpanel.jpg)

When you remove the back panel, you'll need to unscrew the power switch and the speaker in order to take it right off:

![Robosapiens power switch](/assets/projects/robosapien-w-bluetooth-remote/powerswitch.jpg)
![Speaker cover](/assets/projects/robosapien-w-bluetooth-remote/speakercover.jpg)
![Robosapiens speaker](/assets/projects/robosapien-w-bluetooth-remote/speaker.jpg)

The speaker is glued in, but comes out without too much trouble. Notice how the power switch has 3 spare labelled pads for you to add your own power connection. So thoughtful!

Once the cover is removed, you have a naked Robosapien. The main control board is on his back:

![Naked Robosapien Front](/assets/projects/robosapien-w-bluetooth-remote/front.jpg)
![Naked Robosapien Back](/assets/projects/robosapien-w-bluetooth-remote/back.jpg)


Control
-------

I spent quite a while googling for pinouts of the Robosapien control board. Lots of dead links (5 years is a long time on the web), but no pinouts! Then I discovered the reason: the pinout is written on the PCBs!

Unplug all the connectors from the control board, then unscrew the 3 mounting screws. The board comes right off.

Here is the back view. Click on the picture to zoom in. You can see that all the pins are clearly labelled.

![Back of Robosapien control board](/assets/projects/robosapien-w-bluetooth-remote/back-control-board.jpg)

I soldered jumper leads (cheap breadboard wires from ebay, cut in half) to the control board's Vcc (3.3v), Gnd, and IR OUT pins, as shown above. I used dabs of hot glue to keep the loose wires from wiggling around. Here's the jumpered control board, reinstalled:

![Control board + 3 jumpers](/assets/projects/robosapien-w-bluetooth-remote/control-board.jpg)


Alternative Ways to Connect
---------------------------

One of the disadvantages of soldering wires to the pads is that there is no way to separate the original IR receiver from the board. Another technique, that Andrew used, is to cut the IR wire that goes to the "head" plug on the board, and splice the new wire in there. That way you can mix and match connections between the IR sensor, the board, and your microcontroller.


3.3v vs. 5v
-----------

All the microcontroller signals in the Robosapiens are 3.3v. I do not know if they are "5v tolerant", but I'm going to assume "no" for now.

One of the nice things about the Seeeduino is that it has a switch to change the voltage regulator from 5v to 3.3v. Once set to 3.3v, all I needed to do was wire the 3.3v from the control board directly to the 3.3v pin on the Seeeduino board.

If you're using a normal Arduino, or an MHVBoard, these are 5v. So it's a little more complex. You should be able to use the unregulated Vcc (available on the power switch, or on the controller board) to get an unregulated 6v+ from the battery pack. You can wire this to Vin in order to power the board.

Even at 5v, you should be able to read 3.3v input signals directly without any trouble (although it's a bit hacky.) For instance, you can sniff IR signals from the receiver to the main board.

However, using a 5v output to drive a 3.3v pin (for instance, injecting signals into the Robosapien via IR OUT) is not so simple. You'll need to step the output voltage down. There are several easy ways to do this, from this [very simple voltage divider](http://www.makingthings.com/documentation/how-to/scale-a-5v-signal-to-3.3v) to [these other solutions](http://www.sparkfun.com/commerce/tutorial_info.php?tutorials_id=65).


Mounting the Seeeduino
----------------------

This was just a temporary hack, so I used a rubber band to hold the Seeeduino onto the robot, and plugged in 3.3v, GND & IR OUT (to pin 2):

![Seeeduino on Robosapien](/assets/projects/robosapien-w-bluetooth-remote/seeeduino.jpg)


Reading IR Signals
------------------

The best reference I found for the IR signals was this one from [AiboPet](http://www.aibohack.com/robosap/ir_codes.htm). The signals are "space coded", which means that each bit consists of a high followed by a low, and the relative timing of the pulses tells you whether the bit is a 1 or a 0. This is good in situations where you don't want to worry about clock sync, because the sending clock rate is implicitly encoded into the signal.

I wrote a quick Arduino [sketch to read IR pulse codes](http://www.makehackvoid.com/sites/default/files/user7/RoboReader.tgz), and output the hex values to the serial port (via USB.) Then I plugged in the robot and pressed a few buttons on the IR remote.

Here is the main part of the sketch:


    void loop()
    {
        unsigned char val = 0;
        unsigned long start, ts, dur;
      
        while(digitalRead(irPin)) { 
            start = micros(); 
        }
        
        while(!digitalRead(irPin)) { // preamble is 8ts spent low, use to sync clocks
            ts = (micros() - start) / 8;
        }
        
        for(char b = 7; b >= 0; b--) {
            start = micros();
            while(digitalRead(irPin)) { 
              dur = micros() - start;
            }
            if(dur > ts*2)
                val |= 1<<b;             
            while(!digitalRead(irPin)) { }      
        }
        
        Serial.println(val, HEX);          
    }


One of the nice things about this code is it doesn't make any assumptions about the clock rate of the sender, it works it out from the timing on the wire. However, as you can see, it's not ready for any kind of serious use - for instance, it can easily infinite loop if the signal on the wire doesn't match what it's expecting.

Nevertheless, running this code gave me some hex command codes that matched the values in AiboPet's reference. So far, so good.


Writing IR Signals
------------------

Reading IR signals is a bit boring, so I wrote a second [sketch to write some commands](http://www.makehackvoid.com/sites/default/files/user7/RoboLoop.tgz) out to the robot. This is a "dumb loop" that just writes the same sequence of commands, to make the robot go through a little routine:


    void loop()
    {
        writeCommand(leftArmUp);
        delay(2000);
        writeCommand(walkForward);
        delay(3000);
        writeCommand(rightArmUp);
        delay(2000);
        writeCommand(turnLeft);
        delay(3000);
        writeCommand(stopMoving);
        delay(500);
        writeCommand(burp);
        delay(3000);   
    }



The commands were copied from AiboPet's page and then written as an enumerated type:


    enum roboCommand {
        // only a very small subset of commands
        turnRight = 0x80,
        rightArmUp = 0x81,
        rightArmOut = 0x82,
        tiltBodyRight = 0x83,
        rightArmDown = 0x84,
        rightArmIn = 0x85,
        walkForward = 0x86,
        walkBackward = 0x87,
        turnLeft = 0x88,
        leftArmUp = 0x89,
        leftArmOut = 0x8A,
        tiltBodyLeft = 0x8B,
        leftArmDown = 0x8C,
        leftArmIn = 0x8D,
        stopMoving = 0x8E,
       
        // noises
        whistle = 0xCA,
        roar = 0xCE,
        burp = 0xC2 
    };


Finally, here is the simple function that writes commands onto the wire. For writing, the time slice per bit is hard-coded at 833us:


    void delayTs(unsigned int slices) {
        delayMicroseconds(tsDelay * slices); 
    }




    void writeCommand(unsigned char cmd)
    {
        pinMode(irPin, OUTPUT);

        // preamble
        digitalWrite(irPin, LOW);
        delayTs(8);
        
        for(char b = 7; b>=0; b--) {
            digitalWrite(irPin, HIGH);
            delayTs( (cmd & 1<<b) ? 4 : 1 );
            digitalWrite(irPin, LOW);
            delayTs(1);        
        } 
      
        digitalWrite(irPin, HIGH);
        pinMode(irPin, INPUT);
    }


Once this sketch was running the robot wandered around in a circle, burping. But it wasn't very interactive, so that's a bit dull.


Bring the Bluetooth
-------------------

Last month Geoff, Chris & I all went in on some $10 Bluetooth-compatible serial modules from ebay. This was my first chance to try them out.

I intend to put up a dedicated post about these later. For now, all I did was hot glue mine to the Seeeduino and solder the Tx/Rx pins to Seeeduino pins 2 & 3. This gave me a Bluetooth serial link that I could address via a SoftSerial module (I installed the [NewSoftSerial](http://arduiniana.org/libraries/newsoftserial/) library into the Arduino environment, but MHVLib also includes a suitable software serial component.) The Bluetooth modules are 3.3v as well, so the same 5v precautions described above also apply to them.

![Seeeduino + hot glue + Bluetooth serial -> cheaper than an Arduino Bluetooth!](/assets/projects/robosapien-w-bluetooth-remote/seeeduino-work.jpg)

If you don't have access to a Bluetooth module, there are lots of other options for serial wireless links. For instance, here in Australia Jaycar sell one-way [433Mhz wireless modules](http://www.jaycar.com.au/productView.asp?ID=ZW3102). Or you could use an official Arduino Bluetooth, or something like a Seeed Black Widow for a Wifi link. The nice thing about using Bluetooth is that the link is two way, and all of the connection negotiation, reliability, and error correction is handled for you by the Bluetooth protocol.


Bluetoothed Bot
---------------

Here's a photo of the Seeeduino + Bluetooth mounted loosely to the Robosapien:

![Robosapien Bluetooth!](/assets/projects/robosapien-w-bluetooth-remote/bluetoothed.jpg)

The last quick sketch I threw together reads IR commands from the Bluetooth serial link, and then writes them to the control board. If you [download it](http://www.makehackvoid.com/sites/default/files/user7/RoboRelay.tgz), you'll also need the [NewSoftSerial library](http://arduiniana.org/libraries/newsoftserial/).

The sketch file also include a simple Python module, robo_control.py. This module contains some classes to communicate directly with the Bluetooth module. It allows you to send commands from the Python shell, or easily build a user interface to send commands to the module.

Here's a video of him wandering around my kitchen, under Python control:

<iframe width="640" height="360" src="//www.youtube.com/embed/ZRv2Tos-uhw?feature=player_embedded" frameborder="0" allowfullscreen="true"></iframe>

Range on the Bluetooth serial modules seems pretty good. I could still control the robot (blind) at the other end of our apartment, three rooms away from the computer and around two corners!

Here's a screenshot of iPython, showing some of the commands you can use directly:

![iPython screenshot](/assets/projects/robosapien-w-bluetooth-remote/robo-ipython.jpg)


Where to from here?
-------------------

These are pretty humble beginnings. There are a lot of things that would be nice to do with Robosapien, in time. 

First up, at the next MHV meeting we'll be hooking in Chris' FatShark "point-of-view" headset and giving a robots-eye-view as he trundles around! If we're lucky, we may be able to plug in some servos to the Seeeduino and rotate the POV camera directly from there.

Ideas I've had include:

  * Expand the Python module and build a better control interface than the Python shell. Maybe just a computer UI, or maybe a wireless control pad or even a WiiMote.
  * Add sensors to the Seeeduino to give the robot some autonomy: simple things like LDRs could make him into a very noisy light-folllowing robot.
  * Make a "SapienShield" which connects a microcontroller directly to the robot's motors and switches, and replaces the existing controller. This would be much more powerful than just sending IR commands.
  * Arduino/Seeeduino/MHVBoards do not have enough inputs & outputs, so the shield would either need to include some multiplexing ICs, or would need to be built around a more populated board like the Teensy or the Arduino Pro. Those boards both have the advantage of being smaller, as well.

---

**Bigger Robo**
*firespikez — Mon, 01/08/2011 - 6:56pm*
I dug thru the horrors that make up my old wardrobe the otherday and found a working an intact robo sapian, My first thought was to make him Bigger!

I think the circuitry could be kept in tact( might need to lengthen the wires), just replacing motors with stronger ones and building a bigger body with maybe pvc?

Now a bluetooth controlled the size of a small child would be an interesting build, a good script combined with the feed back sensors in its fingers would mean it could act as a butler, fetching beer without crushing the cans., Or a (semi) intelligent vice :D

	**Using Arduino Mega 2560**
	*sanyaade — Thu, 28/06/2012 - 10:06am*
	Hello, Great hack!

	Can I use Arduino Mega 1260 or 2560?

	God blesses!!!

	Best regards,

	Sanyaade

**Python and Raspberry Pi Robosapien**
*herman112 (not verified) — Fri, 22/02/2013 - 12:42pm*
Hi, I love what you have done here and have recently picked up a couple of cheap Robosapiens with the idea of doing something similar. I can follow most of what you have done here but the part that I am falling down on is the sktech to send the commands to the IR pin. Is there any chance you can explain how this works? I'm trying to code it using Python and a Raspberry Pi but am struggling to understand quite whats happening as my C knowledge is pretty limited.

