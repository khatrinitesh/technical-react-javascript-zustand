import { create } from "zustand";
import { ColorStore } from "../interface";

export const useColorStore = create<ColorStore>((set) => ({
    backgroundColor:'#ff0000',
    setBackgroundColor:(color) => set({
        backgroundColor:color
    })
}))