---
title: "Technological Difficulties For Small Business - Backups"
date: 2011-10-05T21:46:38+00:00
slug: technological-difficulties-for-small-business-backups
description: "Backups tend to be difficult for everyone from home computer users to enterprise businesses. The reason it can be the most difficult for small businesses is because they can have a larger amount of data."
categories:
  - Entrepreneurial
  - Web Hosting
tags:
  - Backups
  - FreeNAS
  - Storage
  - ZFS
aliases:
  - /2011/10/technological-difficulties-for-small-business-backups/
---

Backups tend to be difficult for everyone from home computer users to enterprise businesses. The reason it can be the most difficult for small businesses is because they can have a larger amount of data then a home computer user and they don't have the funds that larger companies have in order to implement backup solutions. Luckily there are solutions that are cost effective and will also be able to handle the amount of data that a small business will have.

The solution that I have found to work best is called [FreeNAS](http://www.freenas.org/). [FreeNAS](http://www.freenas.org/) is based on FreeBSD and works very well for cheap storage and backup solutions. Some of the features of [FreeNAS](http://www.freenas.org/) are:

**Version 7**

- SMB/CIFS
- FTP
- RSYNC
- iSCSI
- Bittorrent
- Itunes Server
- ZFS v13
- WebGUI

**Version 8**

- SMB/CIFS
- FTP
- iSCSI
- Snapshots
- ZFS v15
- WebGUI

[FreeNAS](http://www.freenas.org/) can be installed on a low end server which helps to save costs for small businesses that do not have a lot of money to invest in backups but it also has the flexibility to run on very high power servers for larger businesses or as your small business grows and needs to be able to access larger amounts of data at a higher speed.

One of the best parts about [FreeNAS](http://www.freenas.org/) is that it offers the [ZFS file system](http://en.wikipedia.org/wiki/ZFS). ZFS was created by Sun Microsystems and in many ways is a new and improved form of [RAID](http://en.wikipedia.org/wiki/RAID). As for the features of ZFS, I think Wikipedia puts it best.

> "The features of ZFS include data integrity verification against data corruption modes (like bit rot), support for high storage capacities, integration of the concepts of filesystem and volume management, snapshots and copy-on-write clones, continuous integrity checking and automatic repair, RAID-Z and native NFSv4ACLs."

ZFS is very flexible and helps protect your data from 1 or more drives failing depending on your setup. It also can protect your data from bit rot which occurs if your data is not accessed very often. Another great feature is that it can fix problems in your data based on its storage algorithms and the other copies of your files that are stored across all the hard drives in your storage server. All these features are great to protect your data to the furthest extent possible in order to prevent your business from coming to a stand still when your storage or backup server goes down.

Backing up your data can be a easily over looked task at your business until it is to late and all your data is lost. Now you should have a better understanding of how easy it is to have a basic backup/storage server for your business and how you can prevent this disaster from affecting your business.
