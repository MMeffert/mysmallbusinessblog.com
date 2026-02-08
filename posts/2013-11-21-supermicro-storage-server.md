---
title: "Supermicro Storage Server"
date: 2013-11-21T15:20:35+00:00
slug: supermicro-storage-server
description: "After outgrowing the storage space on the Poweredge 2950 I ended up purchasing a Supermicro 24 bay server from eBay. The server came with 8GB of memory, one AMD Opteron quad core 1.8GHz processor ..."
categories:
  - Home Lab
tags:
  - Dell
  - FreeNAS
  - Storage
  - Supermicro
  - ZFS
aliases:
  - /2013/11/supermicro-storage-server/
---

![4457341_P1010759](/images/4457341_P1010759.jpg)

After outgrowing the storage space on the Poweredge 2950 I ended up purchasing a Supermicro 24 bay server from eBay. The server came with 8GB of memory, one AMD Opteron quad core 1.8GHz processor and 24 hot swap bays. I had previously been looking at the Norco 24 bay cases but this ended up being a lot more economical option because I could get the entire server with everything included for about the same price as just the Norco case. Once I received the server I started taking inventory of what it all contained, what I still needed and what upgrades to it would be possible in the future.

The motherboard has two processor sockets with two banks of memory, one for each processor. Only one of the process sockets was populated and there was 4x2GB PC2-5300P DDR2 sticks of memory in the first memory bank. In total the server has 16 memory slots which will allow a lot of memory to be added in the future. The motherboard also has a lot of expandability via add on cards. There are 4 PCI-X slots, 2 PCI-e slots and a special connector for an IPMI card. The IPMI card (SIM1U+) was included and it has a wire that goes to a network jack attached to one of the PCI slots on the back of the case. This network jack gives you a dedicated jack for out of band management otherwise you can use the first regular ethernet jack for management if you don't have the dedicated ethernet port. Out of the four PCI-X slots, three of them are populated with SAT2-MV8 cards which each have 8 sata ports that connect to the 24 hot swap bays in the front of the case. These cards are limited to SATA2 but this shouldn't be an issue unless you are trying to use ssd drives.

The server has two hot swappable power supplies (Ablecom PWS-902-1R) which are quite loud but work well for adding redundancy to the system. There are also six hot swappable fans besides the PSU fans. These fans are very load even at idle and replacing these will be a high priority before I start using the server for file storage.
