# Sitemap Implementation

This document explains the sitemap implementation for the 360 Eye Care website.

## Overview

The sitemap is automatically generated during the build process and includes:

- All static pages (Home, About, Services, etc.)
- All published WordPress blog posts

## Configuration

1. **Environment Variables**
   - `NEXT_PUBLIC_SITE_URL`: The base URL of your website (e.g., `https://360eyecare.com`)
   - `NEXT_PUBLIC_WORDPRESS_API_URL`: The base URL of your WordPress REST API (e.g., `https://your-wordpress-site.com/wp-json`)

2. **Sitemap Files**
   - `/sitemap.xml`: Main sitemap index
   - `/sitemap.xml/route.js`: Dynamic sitemap generator

## How It Works

1. During build time, `next-sitemap` generates a sitemap for all static pages.
2. At runtime, the dynamic route `/sitemap.xml` fetches the latest WordPress posts and combines them with static pages.
3. The sitemap is regenerated every hour (configurable via `revalidate` in `route.js`).

## Adding New Pages

To add a new page to the sitemap:

1. For static pages, add them to the `staticPages` array in `app/sitemap.xml/route.js`.
2. For dynamic pages (like blog posts), they are automatically included if they follow the `/blog/[slug]` pattern.

## Testing

1. Run the development server:
   ```bash
   npm run dev
   ```
2. Visit `http://localhost:3000/sitemap.xml` to view the sitemap.

## Deployment

The sitemap is automatically generated during the build process. No additional steps are required.

## Webhook for Rebuild

To ensure the sitemap updates when new content is published in WordPress, set up a webhook in WordPress that triggers a rebuild of your Next.js site. You can use services like Vercel's webhook system for this purpose.

## Validation

You can validate your sitemap using the [XML Sitemaps Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html).
