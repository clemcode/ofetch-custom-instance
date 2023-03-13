import { appFetch } from "../utils/app-fetch"

export default defineNuxtPlugin(() => {
  return {
    provide: {
      appFetch
    }
  }
})