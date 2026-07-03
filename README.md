# Ileri Portfolio

Expo web portfolio for Ileri.

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
- `src/native/components/` contains the React Native Web UI components.

## Verification

```bash
yarn typecheck
```

## License

Licensed under the MIT license.
