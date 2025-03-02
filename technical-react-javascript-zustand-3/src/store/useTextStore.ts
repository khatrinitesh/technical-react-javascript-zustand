import { create } from "zustand";
import { TextStore } from "../interface";

export const useTextStore = create<TextStore>((set) => ({
    text:'',
    setText:(text) => set({text}),// function to update text
}))