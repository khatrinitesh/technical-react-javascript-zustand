import { create } from "zustand";
import { ArrowState } from "../interface";

export const useArrowStore = create<ArrowState>((set) => ({
    isToggled:false,
    toggleArrow:()=> set((state) => ({
        isToggled:!state.isToggled
    }))
}))