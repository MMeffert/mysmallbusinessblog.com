---
title: "Cisco SG300-28P for Homelab Use"
date: 2013-11-21T16:13:21+00:00
slug: cisco-sg300-28p-for-homelab-use
description: "Review of the Cisco SG300-28P managed switch for homelab use, covering PoE, VLANs, inter-VLAN routing, and SNMP monitoring."
categories:
  - Home Lab
tags:
  - Cisco
  - Reliability
  - Switch
  - Ubiquiti
aliases:
  - /2013/11/cisco-sg300-28p-for-homelab-use/
---

In June I purchased a Cisco SG300-28P switch to replace two 8 port unmanaged switches that I had been using in my home network. These unmanaged switches worked fine but they didn't offer any advanced features such as LAG or VLANs and the low port count was becoming an issue. I went with the 28P version because it offers Power over Ethernet(POE). This was a feature I was looking for at the time because I had a Ubiquiti wireless AP and a Cisco SIP Phone which could both use the POE functionality. The Cisco phone could be plugged directly into the switch but the Ubiquiti AP needed to have an inline converter because Ubiquiti products use a different voltage.

My first impressions of the switch was that it was easy to install into my server rack and I was able to start moving cables from my old switch to the new switch and everything kept working. If you don't want to use any of the advanced features it is pretty easy just to plug everything into this switch and it will work. In order to manage the switch and see the control panel you have to find the IP addresses that it picked up from DHCP. For me this just required that I open pfsense and look at the DHCP lease table. Once you have the IP just enter it into your browser and you will see a Cisco login screen displayed. Login with the default credentials and give it a few sounds to load the interface.

The first time looking at the interface it looks a little overwhelming. I started by going through each of the menus on the left side of the screen to see everything that the switch was able to do. Some of the features that the SG300 has over the SG200 is the ability to do inter VLAN switching. This is something I was looking for because I wanted to start experimenting with VLANs.

A few months later and this switch is still running strong. I haven't had any issues with it and the uptime counter is showing over 100 days. There are very few reasons that you ever need to restart this switch. I am currently using it for iscsi traffic, guest wireless network and regular network traffic. Each of these has its own VLAN to keep everything separate. Recently I have started using SNMP and Nagios to monitor the switch and the amount of traffic that is going through each port of the switch.
