# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Content archive of "My Small Business Blog" — originally a WordPress 5.0.3 blog at mysmallbusinessblog.com (2011-2014). The blog content has been extracted from WordPress HTML into clean markdown with YAML frontmatter. There is no build system, no WordPress artifacts, no PHP or database.

## Structure

```
posts/                         # 28 markdown files with YAML frontmatter
  2011-04-14-dropbox.md        # Format: YYYY-MM-DD-slug.md
  ...
images/                        # 17 original images (flat directory)
  dropbox_graphic.jpg
  ...
CLAUDE.md                      # This file
```

## Post Format

Each post has YAML frontmatter followed by markdown content:

```yaml
---
title: "Post Title"
date: 2011-04-14T13:44:27+00:00
slug: post-slug
description: "Short description..."
categories:
  - Reviews
tags:
  - TagName
aliases:
  - /2011/04/post-slug/          # Original WordPress URL path
---
```

## Key Details

- 28 posts spanning April 2011 to October 2014
- Topics: homelab (pfSense, ZFS, FreeNAS, Cisco, Supermicro), Bitcoin, web hosting reviews, small business tech
- Categories: Bitcoin, Entrepreneurial, Home Lab, Programming, Reviews, Web Hosting
- Images referenced as `/images/filename.ext`
- Aliases preserve original WordPress URL paths for redirect compatibility
- No build, lint, or test commands — this is purely static content

## Working With This Repo

- Posts are standard markdown — compatible with Hugo, Astro, Jekyll, or any SSG
- Image paths use `/images/` prefix (may need adjustment depending on SSG)
- Frontmatter `aliases` field can be used for URL redirects from the old WordPress paths
