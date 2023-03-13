// https://github.com/unjs/ofetch

export const appFetch = $fetch.create({
  async onResponse({ request, response }) {
    console.log('[fetch response]', request, response.status, response.body)
  }
})