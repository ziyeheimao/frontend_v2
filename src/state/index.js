import { atom } from 'recoil'
import routerConfig from '../router/route'


const localStorageEffect = key => ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }
    onSet(newValue => {
      localStorage.setItem(key, JSON.stringify(newValue))
    })
}


export const selectedKeys = atom({
  key: 'selectedKeys',
  default: [routerConfig[0].path],
  effects_UNSTABLE: [
    localStorageEffect('selectedKeys')
  ],
})
