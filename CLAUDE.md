# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Astro-powered static archive of "My Small Business Blog" — originally a WordPress blog at mysmallbusinessblog.com (2011-2014). Hosted on AWS (S3 + CloudFront) with CDK infrastructure and GitHub Actions CI/CD.

## Structure

```
astro.config.mjs                  # Astro config (site, redirects, sitemap)
package.json                      # Astro + Pagefind deps
tsconfig.json                     # Extends astro/tsconfigs/strict
src/
  content.config.ts               # Content collection schema (Zod)
  data/posts/                     # 28 markdown files with YAML frontmatter
    2011-04-14-dropbox.md
    ...
  pages/
    index.astro                   # Homepage — posts grouped by year
    blog/[...slug].astro          # Individual post pages
    categories/index.astro        # Category listing
    category/[category].astro     # Posts in a category
    tags/index.astro              # Tag listing
    tag/[tag].astro               # Posts with a tag
    rss.xml.ts                    # RSS feed
    search.astro                  # Pagefind search page
    404.astro                     # Custom 404
  layouts/
    BaseLayout.astro              # HTML shell, head, nav, footer
    PostLayout.astro              # Single post wrapper
  components/                     # Header, Footer, PostCard, SEOHead, etc.
  styles/
    global.css                    # Reset, tokens, layout
    prose.css                     # Article typography
public/
  images/                         # 17 original images
  robots.txt
infrastructure/
  app.ts                          # CDK entry point
  lib/static-site-stack.ts        # S3 + CloudFront + ACM + Route53 + OIDC
  package.json / tsconfig.json / cdk.json
.github/
  workflows/deploy.yml            # Build + S3 sync + CloudFront invalidation
  dependabot.yml                  # npm + github-actions updates
```

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Build site (runs Pagefind postbuild)
npm run preview      # Preview built site

# Infrastructure (from infrastructure/)
npm run synth        # Synthesize CloudFormation template
npm run deploy       # Deploy to AWS
npm run diff         # Preview changes
```

## Key Details

- 28 posts spanning April 2011 to October 2014
- Topics: homelab (pfSense, ZFS, FreeNAS, Cisco, Supermicro), Bitcoin, web hosting reviews, small business tech
- Categories: Bitcoin, Entrepreneurial, Home Lab, Programming, Reviews, Web Hosting
- Content collections with Zod schema validation in `src/content.config.ts`
- All 28 old WordPress URLs redirect to `/blog/{slug}/` via `astro.config.mjs`
- `/feed/` redirects to `/rss.xml`
- Pagefind search indexes only `/blog/**` pages
- CloudFront Function handles www→non-www, query stripping, and `/index.html` rewriting

## Post Format

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
  - /2011/04/post-slug/
---
```

## AWS Infrastructure

- **Stack**: `mysmallbusinessblog-stack`
- **S3 Bucket**: `mysmallbusinessblog-241654197557`
- **CloudFront**: OAC, HTTP/2+3, PRICE_CLASS_100, security headers
- **ACM**: DNS-validated cert for apex + www
- **Route 53**: A + AAAA records for apex + www
- **OIDC**: GitHub Actions role for CI/CD (references existing provider)
