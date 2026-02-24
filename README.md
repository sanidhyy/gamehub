<a name="readme-top"></a>

# GameHub - A Real-time livestreaming platform.

![GameHub - A Real-time livestreaming platform.](/.github/images/img_main.png "GameHub - A Real-time livestreaming platform.")

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/github/license/sanidhyy/gamehub?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/gamehub/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/gamehub/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/sanidhyy/gamehub?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/gamehub/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/sanidhyy/gamehub?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/gamehub/commits "Github commits")
[![Vercel status](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://twitch-gamehub.vercel.app/ "Vercel status")
[![GitHub issues](https://flat.badgen.net/github/issues/sanidhyy/gamehub?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/gamehub/issues "GitHub issues")
[![GitHub pull requests](https://flat.badgen.net/github/prs/sanidhyy/gamehub?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/gamehub/pulls "GitHub pull requests")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Stats](#wrench-stats)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Buy Me a Coffee](#coffee-buy-me-a-coffee)
- [Follow Me](#rocket-follow-me)
- [Learn More](#books-learn-more)
- [Deploy on Vercel](#page_with_curl-deploy-on-vercel)
- [Give A Star](#star-give-a-star)
- [Star History](#star2-star-history)
- [Give A Star](#star-give-a-star)

</details>

## :bangbang: Folder Structure

Here is the folder structure of this app.

<!--- FOLDER_STRUCTURE_START --->
```bash
gamehub/
  |- actions/
    |-- block.ts
    |-- follow.ts
    |-- ingress.ts
    |-- stream.ts
    |-- token.ts
    |-- user.ts
  |- app/
    |-- (auth)/
    |-- (browse)/
    |-- (dashboard)/
    |-- api/
    |-- error.tsx
    |-- favicon.ico
    |-- globals.css
    |-- layout.tsx
    |-- not-found.tsx
  |- components/
    |-- stream-player/
    |-- ui/
    |-- hint.tsx
    |-- live-badge.tsx
    |-- theme-provider.tsx
    |-- thumbnail.tsx
    |-- user-avatar.tsx
    |-- verified-mark.tsx
  |- config/
    |-- site.ts
  |- hooks/
    |-- use-viewer-token.ts
  |- lib/
    |-- auth-service.ts
    |-- block-service.ts
    |-- db.ts
    |-- feed-service.ts
    |-- follow-service.ts
    |-- recommended-service.ts
    |-- search-service.ts
    |-- stream-service.ts
    |-- uploadthing.ts
    |-- user-service.ts
    |-- utils.ts
  |- prisma/
    |-- schema.prisma
  |- public/
  |- store/
    |-- use-chat-sidebar.ts
    |-- use-creator-sidebar.ts
    |-- use-sidebar.ts
  |- .env.example
  |- .env/.env.local
  |- .eslintrc.json
  |- .gitignore
  |- bun.lock
  |- components.json
  |- middleware.ts
  |- next.config.js
  |- package.json
  |- postcss.config.js
  |- tailwind.config.ts
  |- tsconfig.json
  |- vercel.ts
```
<!--- FOLDER_STRUCTURE_END --->

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env` file in root directory.
4. Contents of `.env`:

```bash
# .env

# clerk auth credentials
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXXXXXXXXXXXX

# clerk redirect urls
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# mysql db uri
DATABASE_URL="mysql://127.0.0.1/gamehub?ssl-mode=REQUIRED"

# livekit keys
LIVEKIT_API_KEY=XXXXXXXXXXXXXXXXXXXX
LIVEKIT_API_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# livekit uris
LIVEKIT_API_URL=https://gamehub-xxxxxxxxxxxxxxx.livekit.cloud
NEXT_PUBLIC_LIVEKIT_WS_URL=wss://gamehub-xxxxxxxxxxxxxxx.livekit.cloud

# app base url
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# uploadthing keys
UPLOADTHING_SECRET=sk_live_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
UPLOADTHING_APP_ID=XXXXXXXXX


```

5. Clerk Redirect URLs

```env
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

6. MySQL DB URI

```env
DATABASE_URL="mysql://127.0.0.1/gamehub?ssl-mode=REQUIRED"
```

7. Livekit Keys

To obtain Livekit keys, follow these steps:

1. **Sign up for a Livekit account:**
   - Visit [Livekit Signup](https://livekit.io/signup) to create an account.

2. **Create a new project:**
   - Log in to your Livekit account.
   - Go to the dashboard and create a new project.

3. **Get API Key and Secret:**
   - Once the project is created, navigate to the project settings.
   - Find or generate API Key and Secret.

```env
LIVEKIT_API_KEY=XXXXXXXXXXXXXXXXXXXX
LIVEKIT_API_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

8. Livekit URIs

```env
LIVEKIT_API_URL=https://gamehub-xxxxxxxxxxxxxxx.livekit.cloud
NEXT_PUBLIC_LIVEKIT_WS_URL=wss://gamehub-xxxxxxxxxxxxxxx.livekit.cloud
```

9. App Base URL

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

10. Uploadthing Keys

To obtain Uploadthing keys, follow these steps:

1. **Sign up for an Uploadthing account:**
   - Visit [Uploadthing Signup](https://uploadthingy.com/) to create an account.

2. **Create a new application:**
   - Log in to your Uploadthing account.
   - Navigate to the dashboard and create a new application.

3. **Get Secret and App ID:**
   - Once the application is created, find or generate the Secret and App ID.

```env
UPLOADTHING_SECRET=sk_live_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
UPLOADTHING_APP_ID=XXXXXXXXX
```

11. Open terminal in root directory. Run `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.

12. Now app is fully configured 👍 and you can start using this app using `npm run dev` or `yarn dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :camera: Screenshots:

![Modern UI/UX](/.github/images/img1.png "Modern UI/UX")

![Realtime Livestream](/.github/images/img2.png "Realtime Livestream")

![Chat Settings](/.github/images/img3.png "Chat Settings")

![Search Functionality](/.github/images/img4.png "Search Functionality")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel") [![Prisma](https://skillicons.dev/icons?i=prisma "Prisma")](https://prisma.io/ "Prisma")

## :wrench: Stats

[![Stats for GameHub](/.github/images/stats.svg "Stats for GameHub")](https://pagespeed.web.dev/analysis?url=https://twitch-gamehub.vercel.app/ "Stats for GameHub")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and dependencies that are used in GameHub.

- Thanks to CodeWithAntonio: https://codewithantonio.com/
<!--- DEPENDENCIES_START --->
- [@clerk/nextjs](https://www.npmjs.com/package/@clerk/nextjs): ^4.31.5
- [@clerk/themes](https://www.npmjs.com/package/@clerk/themes): ^1.7.9
- [@livekit/components-react](https://www.npmjs.com/package/@livekit/components-react): ^1.5.0
- [@prisma/client](https://www.npmjs.com/package/@prisma/client): ^5.7.0
- [@radix-ui/react-avatar](https://www.npmjs.com/package/@radix-ui/react-avatar): ^1.1.11
- [@radix-ui/react-dialog](https://www.npmjs.com/package/@radix-ui/react-dialog): ^1.1.15
- [@radix-ui/react-label](https://www.npmjs.com/package/@radix-ui/react-label): ^2.1.8
- [@radix-ui/react-scroll-area](https://www.npmjs.com/package/@radix-ui/react-scroll-area): ^1.2.10
- [@radix-ui/react-select](https://www.npmjs.com/package/@radix-ui/react-select): ^2.2.6
- [@radix-ui/react-separator](https://www.npmjs.com/package/@radix-ui/react-separator): ^1.1.8
- [@radix-ui/react-slider](https://www.npmjs.com/package/@radix-ui/react-slider): ^1.3.6
- [@radix-ui/react-slot](https://www.npmjs.com/package/@radix-ui/react-slot): ^1.2.4
- [@radix-ui/react-switch](https://www.npmjs.com/package/@radix-ui/react-switch): ^1.2.6
- [@radix-ui/react-tooltip](https://www.npmjs.com/package/@radix-ui/react-tooltip): ^1.2.8
- [@tanstack/react-table](https://www.npmjs.com/package/@tanstack/react-table): ^8.21.3
- [@types/node](https://www.npmjs.com/package/@types/node): ^25.2.3
- [@types/react](https://www.npmjs.com/package/@types/react): ^19.2.14
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): ^19.2.3
- [@types/uuid](https://www.npmjs.com/package/@types/uuid): ^11.0.0
- [@uploadthing/react](https://www.npmjs.com/package/@uploadthing/react): ^6.0.2
- [@vercel/config](https://www.npmjs.com/package/@vercel/config): ^0.0.33
- [autoprefixer](https://www.npmjs.com/package/autoprefixer): ^10.4.24
- [class-variance-authority](https://www.npmjs.com/package/class-variance-authority): ^0.7.1
- [clsx](https://www.npmjs.com/package/clsx): ^2.1.1
- [date-fns](https://www.npmjs.com/package/date-fns): ^4.1.0
- [eslint](https://www.npmjs.com/package/eslint): ^8
- [eslint-config-next](https://www.npmjs.com/package/eslint-config-next): 14.0.4
- [jwt-decode](https://www.npmjs.com/package/jwt-decode): ^4.0.0
- [livekit-client](https://www.npmjs.com/package/livekit-client): ^1.15.4
- [livekit-server-sdk](https://www.npmjs.com/package/livekit-server-sdk): ^1.2.7
- [lucide-react](https://www.npmjs.com/package/lucide-react): ^0.574.0
- [next](https://www.npmjs.com/package/next): 15.5.10
- [next-themes](https://www.npmjs.com/package/next-themes): ^0.4.6
- [postcss](https://www.npmjs.com/package/postcss): ^8
- [prisma](https://www.npmjs.com/package/prisma): ^5.7.0
- [query-string](https://www.npmjs.com/package/query-string): ^9.3.1
- [react](https://www.npmjs.com/package/react): ^19.2.4
- [react-dom](https://www.npmjs.com/package/react-dom): ^19.2.4
- [sonner](https://www.npmjs.com/package/sonner): ^2.0.7
- [svix](https://www.npmjs.com/package/svix): ^1.85.0
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge): ^2.1.0
- [tailwindcss](https://www.npmjs.com/package/tailwindcss): ^3.3.0
- [tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate): ^1.0.7
- [typescript](https://www.npmjs.com/package/typescript): ^5.9.3
- [uploadthing](https://www.npmjs.com/package/uploadthing): ^6.1.0
- [usehooks-ts](https://www.npmjs.com/package/usehooks-ts): ^3.1.1
- [uuid](https://www.npmjs.com/package/uuid): ^13.0.0
- [zustand](https://www.npmjs.com/package/zustand): ^5.0.11

<!--- DEPENDENCIES_END --->

## :coffee: Buy Me a Coffee

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![GitHub followers](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me")
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fx.com%2F_sanidhyy)](https://x.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%2Fmedical-chat-app "Tweet")

## :books: Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## :page_with_curl: Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :star2: Star History

<a href="https://star-history.com/#sanidhyy/gamehub&Timeline">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=sanidhyy/gamehub&type=Timeline&theme=dark" />
  <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=sanidhyy/gamehub&type=Timeline" />
  <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=sanidhyy/gamehub&type=Timeline" />
</picture>
</a>

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
```
