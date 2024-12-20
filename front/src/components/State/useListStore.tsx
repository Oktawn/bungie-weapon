import ky from "ky";
import { create } from "zustand";
import { persist } from "zustand/middleware";


const baseURL = ky.create({
  prefixUrl: 'http://localhost:3000/bungie-api/'
})

export interface ShortWeapon {
  id: string,
  name: string,
  icon: string,
  watermark: string
}


interface ListStore {
  listWeapons: ShortWeapon[],
  isLoading: boolean,
  setList: () => Promise<void>,
  setIsLoading: () => void,
  getWeapons: (filter: string) => ShortWeapon[],
  getWeapon: (id: string) => Promise<any>,
  getLoading: () => boolean
}


export const useListStore = create<ListStore>()(persist((set, get) => ({
  listWeapons: [],
  isLoading: false,
  setList: async () => {
    try {
      const res = await baseURL.get('allWeapons').json<ShortWeapon[]>();
      console.log(res)
      set({ listWeapons: res })
    } catch (error) {
      console.log(error)
    }
  },
  setIsLoading: () => set(state => ({ isLoading: !state.isLoading })),

  getWeapons: (filter) => {
    return get().listWeapons.filter((item) =>
      item.name.toLowerCase().startsWith(filter.toLowerCase()))
  },
  getWeapon: async (id) => {
    try {
      const res = await ky.get(baseURL + `weaponById/id=${id}`).json<any>();
      return res
    } catch (error) {
      console.log(error)
    }
  },
  getLoading: () => {
    return get().isLoading
  }
}),
  {
    name: 'listStore'
  },)
)