---
title: "pfSense - Router"
date: 2012-07-25T19:12:44+00:00
slug: pfsense-router
description: "Why pfSense is a powerful alternative to consumer routers, offering more RAM, CPU, and features like DNS, DHCP, VPN, and failover."
categories:
  - Home Lab
tags:
  - DHCP
  - pfSense
  - Router
aliases:
  - /2012/07/pfsense-router/
---

pfSense is a great alternative to store bought, home routers. The first reason being that home routers have a very weak processor in them and a very small amount of memory. You are also locked down as far as what you can change in these routers. Most of them don't give you many options for customization. Using pfSense you can install it on any old machine that you have lying around the house or you can install it on a newer machine if you need more network throughput or you want to do a lot of customization.

I decided to install it on some newer hardware that way I could add more ram in the future without much hassle but I also wanted to be able to customize it and have it do more than just the basic router tasks. Currently my pfSense box contains only 1GB of ram but that is huge compared to the 32MB or less that a Linksys router has. My pfSense box also has a lot more processor power. This helps to make sure there is no bottleneck when sending or receiving information from the internet. It also allows me to run services such as DNS, DHCP, Caching, VPN and many other graphing services all on my router.

DHCP on pfSense is similar to what you would see on any other router. It allows you to select the subnet that you would like to use for your network, set the range of IP addresses that you want it to handout and specify what you want the WIN and DNS servers to be. One of the features that pfSense offers over other routers is the ability to have a failover. This means that you can have two pfSense boxes and have one take over if the primary fails. This may be overkill if you are home user but for a small business this would be a great feature.

![pfsense_dhcp](/images/pfsense_dhcp.jpg)
