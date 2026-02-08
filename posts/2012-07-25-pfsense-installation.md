---
title: "pfSense - Installation"
date: 2012-07-25T03:59:46+00:00
slug: pfsense-installation
description: "The pfSense installation can be completed in under 15 minutes and is very easy. I decided to use a Dell Poweredge R200 that I had with 1GB of Ram and an 80GB hard drive. This server had two built..."
categories:
  - Home Lab
tags:
  - Firewall
  - pfSense
aliases:
  - /2012/07/pfsense-installation/
---

The pfSense installation can be completed in under 15 minutes and is very easy. I decided to use a Dell Poweredge R200 that I had with 1GB of Ram and an 80GB hard drive. This server had two built in NIC ports so it was perfect for pfSense. During the installation you will be asked to select which port you want to use as your lan and which port you want to use as your wan. I found the easiest way to do this was to start the installation with no ethernet cables connected to either port. Then when you get to the part where you need to select which port is lan and which is wan you can just select the auto detect option and plug them in as requested by the installer. This is much simpler then figuring out what each of the ports is named.

After the installation is complete you can decide to what level of complexity you want to use pfSense. I wanted to use it as my firewall, router, web cache and VPN server. Along with these services I also wanted to be able to monitor the traffic that was flowing in and out of my network. All of these features are built into pfSense and can be enabled simply by selecting the plugins. In future posts I will go into more detail about how to set up each of these features.
