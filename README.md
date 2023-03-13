# ofetch-custom-instance

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/nuxt-starter-2zvcxt)

[Ofetch](https://github.com/unjs/ofetch)

## Description

Dans cet exemple, une instance custom de `ofetch` est créée dans le dossier `/utils`.

Cette instance est mise à disposition dans le contexte de l'application :

- via le plugin `~/plugins/app-fetch.ts` (`const { $appFetch } = useNuxtApp()`)

- via la composable `useAppFetch`.
