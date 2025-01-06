import { create } from "zustand";
import { CheckboxStore } from "../interface";

export const useCheckboxStore = create<CheckboxStoree>((set) => ({
    checked:false,
    toggleChecked:() => set((state) => ({
        checked:!state.checked
    }))
}))