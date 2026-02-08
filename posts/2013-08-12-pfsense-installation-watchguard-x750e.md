---
title: "pfSense Installation - Watchguard X750e"
date: 2013-08-12T17:17:28+00:00
slug: pfsense-installation-watchguard-x750e
description: "Previously I had been using a Dell Poweredge R200 to run pfSense for my home network which worked great but it was kind of overkill for what pfSense really needed to run optimally so I ended..."
categories:
  - Home Lab
tags:
  - Appliance
  - Firewall
  - pfSense
  - Poweredge
  - Watchguard
aliases:
  - /2013/08/pfsense-installation-watchguard-x750e/
---

![235747F0-4EB1-4064-875E-F13769D4AB51](/images/235747F0-4EB1-4064-875E-F13769D4AB51.jpg)

Previously I had been using a Dell Poweredge R200 to run [pfSense](http://www.pfsense.org/) for my home network which worked great but it was kind of overkill for what pfSense really needed to run optimally so I ended up selling the R200 and moving pfSense to a virtual machine. The virtual machine worked ok but it was not great because when the Esxi host would go down or need to be restarted, I would have issues getting all the VMs to come back up because the router was gone so they couldn't check with pfSense to get an IP address. In order to get away from running pfSense in a virtual environment, I decided to try installing pfSense on a [Watchguard X750e](http://www.watchguard.com/products/core-e/overview.asp) firewall appliance. I had seen some tutorials on the pfSense documentation site about how to do this and it looked interesting to me because of how many network ports were available on the X750e.

I started by purchasing a Watchguard X750e off of eBay for $100. There are many different models and versions of Watchguard appliances on eBay. The X750e is more expensive then some of the others but it is also newer and has all gigabit network ports compared to some of the others which only have 100mb. After purchasing the firewall appliance I received it a few days later and it was packaged very well. I was a little nervous about what the condition of it was going to be because the seller had only stated that it powered on and that was all they tested. This ended up being why I was able to purchase it cheaper then other options and this time it worked out well. The firewall appliance was in good condition and powered up without any problems.

The first thing I wanted to do is try the firewall appliance with the Watchguard software on it. This was more for curiosity more then anything. I plugged it in and connected a Ethernet cable to my laptop and I was able to connect without any issues. Once in the web interface it asks for a licence key in order to active the appliance. I did not have a licence key so I couldn't go any further then this. The Watchguard software looks like it could be pretty interesting but the purpose of this appliance was to use it for pfSense so I didn't put any more work into going down the path of the Watchguard software.

The installation of pfSense seemed straight forward based on what I read but it ended up being more difficult then I expected. Hopefully what I found out will help others that are trying to do this and help them to not run into the same issues as I did.

If you are just looking for the official guide, that can be found in the [pfSense Documentation](http://doc.pfsense.org/index.php/PfSense_on_Watchguard_Firebox). This documentation was very helpful for me but I will cover a few things that they seem to have left out.

1. The first item that I ran into was flashing the bios. Everything I had read said that you needed a Compact Flash card that was 256MB or under in order to flash the bios. The reason for this is that with the current bios settings it will only read a card of 256MB or less. (With the model I received it came with a 512MB card so that limit of 256MB may have been for an older version). I tried booting the 4GB Compact Flash card that had the embedded version of pfSense on it before flashing the bios but it wouldn't read the card. Even when I put the flashing software on a 256MB Compact Flash card the firewall appliance would not read it. All the documentation says that you should hear three beeps and they be able to see text on the console connection but I would never get the three beeps only the first beep after it checks all the memory.The reason for this ended up being that it didn't want to read the 256MB card. I ended up find a forum after days of searching that suggested that the smaller the Compact Flash card the better chance it would have of working. The user on the forums suggested a 32MB Compact Flash card. So I purchased an old 32MB card off of eBay for a few dollars. When it arrived I connected it to my Macbook Pro and used dd in the terminal to copy the image over to the card. I tried inserting it into the Watchguard appliance and it booted up without a problem. I heard the three beeps and I could then see text on the console connection that I was using. For anyone running into this same issue try using a 32MB Compact Flash card and it should work without issue.
