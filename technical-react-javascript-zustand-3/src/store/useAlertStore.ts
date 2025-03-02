import { create } from "zustand";
import { AlertState } from "../interface";

export const useAlertStore = create<AlertState>((set) => ({
    isVisible:false,
    message:'',
    showAlert:(message) => set({
        isVisible:true,
        message
    }),
    hideAlert:() => set({
        isVisible:false,
        message:''
    })
}))