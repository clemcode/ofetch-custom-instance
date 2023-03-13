
import { appFetch } from '@/utils/app-fetch'

export const useAppFetch = async (url, options = {}) => {
  const response = await useAsyncData(url, () => appFetch(url), options)

  return response
}