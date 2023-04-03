# ofetch-custom-instance

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/nuxt-starter-2zvcxt)

[Ofetch](https://github.com/unjs/ofetch)

## Description

In this example, a custom instance of `ofetch` is created in the `/utils` directory.

This instance is made available in the application context :

- through the plugin `~/plugins/app-fetch.ts` (`const { $appFetch } = useNuxtApp()`)

- through the composable `useAppFetch`.
