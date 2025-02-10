import { defineStore } from 'pinia'

export const useCommonStore = defineStore('commonStore', {
  state: () => ({
    promiseType: false as boolean,
    menuBackground: false as boolean,
  }),
})
