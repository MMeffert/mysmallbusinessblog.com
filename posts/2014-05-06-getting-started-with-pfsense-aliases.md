---
title: "Getting Started With pfSense Aliases"
date: 2014-05-06T00:21:03+00:00
slug: getting-started-with-pfsense-aliases
description: "pfSense has been a great addition to my home network but I haven't messed with aliases until recently. Aliases can be great when you have groups of IP addresses or ports that you are going t..."
categories:
  - Home Lab
tags: []
aliases:
  - /2014/05/getting-started-with-pfsense-aliases/
---

pfSense has been a great addition to my home network but I haven't messed with aliases until recently. Aliases can be great when you have groups of IP addresses or ports that you are going to use throughout pfSense. My use for aliases so far has been for setting up firewall rules.

To get started login to pfSense.

![pfsense-login](/images/pfsense-login.png)

Along the top menu hover over Firewall and click on Aliases.

![aliases-menu](/images/aliases-menu.png)

The first screen you will see is IP aliases. IP aliases allows you to create a group of IP addresses that you can assign by group name instead of specifying each IP address individually. This can be great for specifying a group of servers that need ssh access and then in the firewall rules you can create a rule that allows ssh traffic for the ssh servers group.

![ip-aliases](/images/ip-aliases.png)

The next tab is for setting up Port Aliases. Similar to the IP Aliases you can setup groups but on this tab you are creating groups of ports instead of IP addresses. For example some of the port groups that I created were apple_ports which contains ports that I wanted to allow for iMessage and Facetime. Another group of ports that I setup is web_ports. This group allows ports 80, 443, 53 and 123. Port 80 is for HTTP, port 443 is for HTTPS, port 53 is for DNS and port 123 is for NTP. These port groups can be setup differently depending on what you want to allow and what your goal is for organizing ports.

![ports-aliases](/images/ports-aliases.png)

After all your IP Aliases and Port Aliases are setup then you can start creating firewall rules which I will cover in my next post.
