## ***Introduction***
---------------
![](https://raw.githubusercontent.com/Longan-Labs/Longan_Site_Images/master/HeelightCore/Core-2.jpg)
Heelight Core is a smart sound sensor that can recognize up to 500+ digital voice commands. It was originally used on the Heelight – a smart colorful bulb that can be controlled by digital sound waves. Now we introduce this sensor into the small and neat modules, allow you to control things via sound in your projects.

## ***Features***
----------------
* Small Size: 20x17mm
* 500+ sound commands
* Android/iOS App
* Bread board or intrtged into PCBA
* 10m control distance
* UART output, default 9600 baudrate

## ***Size***
---------------
![](https://raw.githubusercontent.com/Longan-Labs/docs_mkdocs/master/docs/images/core/size2.png)

## ***APP***
--------
* [Android](https://play.google.com/store/apps/details?id=com.heelight.wc.heelightlite)
* [iOS](https://itunes.apple.com/cn/app/heelight-pro-cai-deng-sheng/id1095593464?mt=8)


## ***Getting Started with Arduino***
--------------

First of all, you need to connect relay core to your Arduino, as bellow:

|Heelight Core|Arduino|
|-------------|-------|
|GND|GND|
|VCC|3.3V|
|TX|2|
|RX|3|

!!!warning
    DON'T connect VCC to 5V, otherwise you may damage the module
    
This is the basic example that can show the ability of the sensor, 
which is output different hex values in the serial monitor when it receives (or hear) different digital sounds. 

```arduino
// heelight test code
#include <SoftwareSerial.h>

SoftwareSerial heelight(2, 3);  // RX, TX

void setup()
{
    Serial.begin(9600);
    heelight.begin(9600);       // default baudrate is 9600
}

void loop()
{
    while(heelight.available())
    {
        Serial.print(heelight.read(), HEX);
        Serial.print('\t');
        Serial.print(heelight.read(), HEX);
        Serial.print('\t');
        Serial.print(heelight.read(), HEX);
        Serial.print('\t');
        Serial.print(heelight.read(), HEX);
        Serial.println(); 
    }
}
```

Open the serial monitor, set baud rate to be 9600, 
then play the sound. We have prepared 511 different digital sounds for you. Every time one sound is played, 
the heelight sensor will output a hex value correspond to the sound, 
and the last 2 characters of the hex value is the same as the sounds value.

![](https://raw.githubusercontent.com/Longan-Labs/docs_mkdocs/master/docs/images/core/core_monitor.png)

## ***Reference***
---------
* [Eagle Library of Heelight Core]()
* [500 sound commands](https://github.com/Longan-Labs/docs_mkdocs/raw/master/docs/images/relay/audio.zip)
* [Heelight Relay](http://docs.longan-labs.cc/relay/)