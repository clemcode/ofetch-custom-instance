
export default async function (url: string, options = {}) {
  const { $appFetch } = useNuxtApp()
  return useAsyncData(url, () => $appFetch(url), options)
}