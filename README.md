# David-Paul Folorunsho-Roberts Portfolio

Personal portfolio site for David-Paul Folorunsho-Roberts, Software Engineer (Mobile & Backend).
Built with Expo and exported as a static web app.

## Getting Started

Install dependencies:

```bash
yarn install
```

Start the browser dev server:

```bash
yarn start
```

Expo will print a normal `http://localhost:...` browser URL.

Create a static web build:

```bash
yarn export
```

The static site is emitted to `dist/`.

## Project Structure

- `App.tsx` is the main Expo web entry surface.
- `app/` contains the Expo Router entry files.
- `src/native/data.ts` contains the portfolio content used by the website.
- `src/native/skillIcons.ts` maps skill labels to their logo URLs.
- `src/native/components/` contains the React Native Web UI components.

## Deployment

This is a static site — see [DEPLOYMENT.md](DEPLOYMENT.md) for a step-by-step guide to
hosting it on Vercel with a custom domain.

## Verification

```bash
yarn typecheck
```

## License

Licensed under the MIT license.
