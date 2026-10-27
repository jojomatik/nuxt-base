# Nuxt 4 Base

A starter project for Nuxt 4 with:

- ESLint and Prettier
- Example Composition API components and page metadata
- Internationalization with `@nuxtjs/i18n` and `vue-i18n`
- Vuetify theming and components
- Storybook with theming and internationalization modes

These integrations and shared configuration are provided by
[`@jojomatik/nuxt-bundle`](https://github.com/jojomatik/nuxt-bundle), which this project
extends from `nuxt.config.ts`.

## Setup

Use Node.js 24.22.1 (the version used in CI) and Yarn Classic (the repository uses a
Yarn v1 lockfile). Install the dependencies with:

```bash
yarn install --frozen-lockfile
```

## Development

Start the development server at http://localhost:3000:

```bash
yarn dev
```

Run linting:

```bash
yarn lint
```

Start Storybook at http://localhost:6006:

```bash
yarn storybook
```

## Production

Build the application and run the production server:

```bash
yarn build
yarn start
```

See the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment)
for deployment options.
