import { create } from "zustand";
import { IconState } from "../interface";

export const useIconStore = create<IconState>((set) => ({
    isActive:false,
    toggleIcon:() => set((state) => ({
        isActive:!state.isActive
    }))
}))