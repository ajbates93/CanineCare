# A Comprehensive Canine Health Tracker

## Summary
CanineCare is a user-friendly web application designed to help dog owners track and manage their furry friends' health and well-being. The platform allows users to log essential health-related events, such as flea, tick, and wormer treatments, as well as vet visits, and keep notes for each visit. Additionally, users can upload relevant documents, such as vaccination records, test results, and other essential medical information.

## Stack
CanineCare is written in Nuxt 3, making use of the TailwindCSS design framework to style up the front-end. The back-end is delivered using Nuxt's built in server directory functionality to produce an API, interfacing with a PostgreSQL database hosted on the Supabase platform, via a Prisma ORM to manage data models and handle migrations in an elegant manner.

# Installation Instructions (from Nuxt)

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
