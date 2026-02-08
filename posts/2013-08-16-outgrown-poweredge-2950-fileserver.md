---
title: "Outgrown Poweredge 2950 Fileserver"
date: 2013-08-16T13:00:22+00:00
slug: outgrown-poweredge-2950-fileserver
description: "My home lab has had a Dell Poweredge 2950 for quite a while now and it has been used for storing files and backups but recently it has been nearing capacity both in terms of storage space and perfo..."
categories:
  - Home Lab
tags:
  - Backups
  - Dell
  - FreeNAS
  - Storage
  - ZFS
aliases:
  - /2013/08/outgrown-poweredge-2950-fileserver/
---

My home lab has had a Dell Poweredge 2950 for quite a while now and it has been used for storing files and backups but recently it has been nearing capacity both in terms of storage space and performance. I have been using NFS to store some virtual machines when they are not in use but the 2950 server has been to slow to use with running virtual machines. This could be caused by a number of things including the low amount of ram (Only 4GB), the speed of the disk or the network connections. Either way it is time to start looking for an upgrade. My original plan was to purchase a Norco RPC-4224 case and build my next file server from scratch but when I started pricing out all the parts it was going to be in the $1500 -- $2000 range before having any hard drives in it. This is when I decided to start looking at eBay to see what other options are available. I was looking for something that had 24 bays so that I would have plenty of room for future expansion, was powerful enough to do encryption and compression on all data and was reasonably power efficient. I ended up finding a Supermicro 24 bay server that came pre-built which fit all my requirements. It comes with a single CPU but a second CPU can be added. It comes with 8GB of ram but also has 12 open slots so a lot more ram can be added. This unit should arrive in the next week and then I will be testing it out to see if it meets everything that I was expecting.
