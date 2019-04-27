## ***Introduction***
------------

![](https://raw.githubusercontent.com/Longan-Labs/docs_mkdocs/master/docs/images/obdkit/part_list.jpg)

This kit allows you to interface with your vehicle's OBD-II interface. The kit includes a Serial CAN Bus module as well as a OBD-II Connector, with this kit you can get data from your vehicle easily. We provide an tutorial which is based on Arduino.

OBD-II (short for On-Board Diagnostics, Second Generation) is a set of standards for implementing a computer based system to control emissions from vehicles. It was first introduced in the United States in 1994, and became a requirement on all 1996 and newer US vehicles. Other countries, including Canada, parts of the European Union, Japan, Australia, and Brazil adopted similar legislation. A large portion of the modern vehicle fleet supports OBD-II or one of its regional flavors.


## ***Features***
-------

* Up to 1Mb/s CAN Bus rate
* DIY kit
* Multi-platform avaiable (Arduino, Raspberry, Beaglebone Board, etc.)
* Serial Communication
* Tutorial for Arduino

## ***Partlist***

1. Serial CAN Bus Module
2. OBD-II Connector
3. Screw Driver
4. Cable for CAN Bus
5. Grove Cable

!!!Note
    The kit don't include a controller board.

## ***Hardware Overview of Serial CAN Bus Module***
---------------------------

![](https://raw.githubusercontent.com/Longan-Labs/docs_mkdocs/master/docs/images/canbus/hw.png)

1. 4 pin 2.0mm Grove Connector
2. Power and status led indicator
3. Send and Recv led indicator
4. 3.5mm terminal to connect to CAN Bus (CAN_H & CAN_L)
5. 120Ω registor, default connected, if you don't need you cut this pad with a box cutter. 

## ***Hardware Connection***

The kit includes an OBD-II connector, below is pins define of the connector. 

![](https://raw.githubusercontent.com/Longan-Labs/docs_mkdocs/master/docs/images/obdkit/obdii%20port.jpg)

The kit includes a cable as well, you need a soldering iron to connect the cable to the connector. 
As shown below.

![](https://raw.githubusercontent.com/Longan-Labs/docs_mkdocs/master/docs/images/obdkit/connect.png) 


## ***Getting Started with Arduino***

Here we will make a demo to read some value from a vehicle with an Arduino.

Download Arduino library of the board from [Github](https://github.com/Longan-Labs/Serial_CAN_Arduino)

Open the example "obd_demo".

![](https://raw.githubusercontent.com/Longan-Labs/docs_mkdocs/master/docs/images/obdkit/arduinocode.png)

For this example, we use D2 as RX of software serial, D3 as TX.
So you should connect D2 to TX of Serial can bus module, and D3 to RX. 

After upload the sketch to Arduino, you can try connect OBD-II connector to your vehicle. 

Open you serial monitor, try to input an OBD-PIDs, see if you can get some values from your vehicle. 

Click to get more about [OBD-PIDs](https://en.wikipedia.org/wiki/OBD-II_PIDs). 



## ***Reference***
------------

* [Wiki for Serial CAN Bus module](http://docs.longan-labs.cc/can_bus/)
* [Arduino Library](https://github.com/Longan-Labs/Serial_CAN_Arduino)
* [Schematics of Serial CAN Bus Module in Eagle File](https://github.com/Longan-Labs/Eagle_File_Serial_CAN_Bus/archive/master.zip)
