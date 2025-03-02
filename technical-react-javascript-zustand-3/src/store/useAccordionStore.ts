import { create } from "zustand";
import { AccordionState } from "../interface";

export const useAccordionStore = create<AccordionState>((set) => ({
    openItem:null,
    toggleItem:(index) => set((state) => ({
        openItem:state.openItem === index ? null : index
    }))
}))