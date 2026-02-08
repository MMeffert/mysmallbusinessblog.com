---
title: "ZFS File Server - Memory Problems"
date: 2012-07-18T02:15:48+00:00
slug: zfs-file-server-memory-problems
description: "After booting the server an error was displayed that two of the memory modules had failed the memory test and I could press F1 to continue. I continued to install Freenas and didn't think mu..."
categories:
  - Home Lab
tags:
  - Dell
  - FreeNAS
  - Memory
  - Poweredge
  - ZFS
aliases:
  - /2012/07/zfs-file-server-memory-problems/
---

After booting the server an error was displayed that two of the memory modules had failed the memory test and I could press F1 to continue. I continued to install Freenas and didn't think much of it. The available memory displayed in Freenas was 2GB instead of the 4GB that are installed. Eventually I looked into the issue and it ended up being that the memory modules were not seated correctly anymore after all the moving and transporting of the server. I reseated all the modules and they all passed without any problems. Now the server has all 4GB of memory available for Freenas.
