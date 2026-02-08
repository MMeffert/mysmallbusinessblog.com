---
title: "ZFS File Server - First Hard Drive Failure"
date: 2012-11-15T16:22:25+00:00
slug: zfs-file-server-first-hard-drive-failure
description: "I experienced my first hard drive failure in my ZFS file server. I noticed the drive had failed when the light on the front of my Dell Poweredge 2950 turned orange. I immediately logged into the ..."
categories:
  - Home Lab
tags:
  - Dell
  - FreeNAS
  - Harddrive
  - Storage
  - ZFS
aliases:
  - /2012/11/zfs-file-server-first-hard-drive-failure/
---

I experienced my first hard drive failure in my ZFS file server. I noticed the drive had failed when the light on the front of my Dell Poweredge 2950 turned orange. I immediately logged into the Freenas control panel to see what was going on. I checked the drive status and one of the drives was marked as failed.

First I started by shutting down the server as even though the server chassis supports hot swapping hard drives, Freenas does not support hot swapping drives. Once the server was shutdown, I removed the failed drive and wrote down the serial number in order to file a warranty claim with Western Digital. Western Digital's website made it very easy to file the warranty claim and within a few minutes I had an RMA number and a shipping label to send the drive to them. I choice to ship the drive via UPS ground so it took about four days for it to arrive at the Western Digital Processing facility. Within 24 hours I received an email stating that my replacement drive had been shipped. It was another two days before I received the replacement drive. After receiving the drive I placed it in the drive tray and screwed it in and put it back in the server.

I started the server back up but Freenas was not finding the drive. After some troubleshooting I relived that I hadn't passed the new drive through the raid controller. ZFS prefers to have direct access to each drive so I pass each drive through the raid controller as raid 0. After setting the drive to raid 0 in the bios and initializing the drive, I was able to now see the new drive in Freenas. At this point the rebuild started and took about 12 hours. Reading forms about this large of drives and the slow speed of the Western Digital Green drives made me nervous about the rebuild time but it was quick and I was surprised how smoothly it went. After the drive was rebuilt, I went into Freenas and removed the old drive from the drive status page. Freenas now displays that the array is no longer degraded and has a green status.

Lessons Learned:

- Make sure to pass your drives through the raid controller otherwise Freenas can't access them
- Use zpool status command to view the status of the rebuild
- Remove the old drive from Freenas after the rebuild has completed
