import { appFetch } from "../utils"

export default defineNuxtPlugin(() => {
  return {
    provide: {
      appFetch
    }
  }
})