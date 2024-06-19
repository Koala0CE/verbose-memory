This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project Overview

Project Title: Personal Timeline Application soon to be MemoryGlobe

Tech Stack: React, TypeScript, Next.js, Contentful, Auth0, GitHub Pages

Primary Goals and Functionalities: The main goal of the application is to create a personal timeline with photos and memories from my life, accessible only to specific users. Key functionalities include:

User Authentication and Authorization: Utilizing Auth0 for secure user login and role-based access control, allowing access only to friends and family.

Content Management: Integrating Contentful as a headless CMS to manage and deliver private photos and content.

Dynamic Content Display: Randomly displaying a set of public photos to unauthorized users while ensuring private photos are only accessible to authenticated users.

Static Site Hosting: Deploying the application on GitHub Pages for simplicity and ease of use.

Future Plans

I plan to expand the application's UI by incorporating an interactive Earth globe. This globe will feature puzzle pieces representing different countries, highlighting the countries I have visited with active pieces. Each active piece will showcase photos and memories from that country, providing a visual and engaging way to explore my travels.

Challenges and Solutions

Challenge: Implementing Secure Authentication and Authorization

Solution: I chose Auth0 for its robust security features and seamless integration with React and Next.js. I created roles and permissions to ensure only friends and family can access private photos, while public users see a set of random photos.

Challenge: Managing Private Content Efficiently

Solution: Contentful was selected as the CMS due to its flexible API and secure content delivery capabilities. I used Contentful’s API to fetch and render content based on user authentication status.

Challenge: Deploying a Static Site with Dynamic Content

Solution: I opted for Vercel to host the application, leveraging its seamless integration with GitHub for continuous deployment. The application dynamically renders content based on the user’s authentication status, ensuring privacy and dynamic content display.

Using Vercel allows for easy deployment of the Next.js application, which handles both static and dynamic content effectively. Auth0 is used for authentication, ensuring that sensitive data is only accessible to authenticated users. The dynamic content includes personalized data fetched from Contentful, a headless CMS, ensuring that each user sees content relevant to their authentication status.

https://verbose-memory.vercel.app

## TL;DR:

Purpose: Create a personal timeline with private photos and memories.
Authentication: Uses Auth0 for secure login; only friends and family can access private content.
Content Management: Contentful CMS for private photo management.
Hosting: Deployed on Vercel for dynamic and static content handling.
Future Plans: Add an interactive globe showcasing travel photos.
Challenges & Solutions:
Secure Authentication: Auth0 for robust security.
Private Content Management: Contentful for secure delivery.
Dynamic Deployment: Vercel for continuous deployment and dynamic content rendering.
