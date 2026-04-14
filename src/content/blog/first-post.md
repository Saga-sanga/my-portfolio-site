---
title: 'My First Blog Post'
description: 'Welcome to my new portfolio and blog built with Astro and Tailwind CSS.'
pubDate: '2023-11-01'
tags: ['astro', 'webdev', 'tailwind']
---

Welcome to my new digital garden! 

I decided to build this portfolio using **Astro**, **Tailwind CSS**, and **React**. I wanted a platform that was incredibly fast, simple to maintain, and allows me to write content using Markdown. 

## Why Astro?

Astro's architecture is brilliant for content-heavy sites. It extracts all the UI into static HTML and only loads JavaScript when absolutely necessary. This means the time-to-interactive for my blog posts is virtually zero.

Here's a quick code block showing how clean the Markdown frontmatter is using Astro Collections:

```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
  }),
});
```

I'll be posting more about my web development journey, tutorials, and thoughts on design here. Stay tuned!
