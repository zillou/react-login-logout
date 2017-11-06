import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'APOLLO_DEMO_STORAGE'

export const setUserToken = (token) => {
  return AsyncStorage.setItem(STORAGE_KEY, token)
}

export const getUserToken = () => {
  return AsyncStorage.getItem(STORAGE_KEY)
}

export const removeUserToken = () => {
  return AsyncStorage.removeItem(STORAGE_KEY)
}
