import { create } from "zustand";
import { SearchState } from "../interface";

export const useSearchStore = create<SearchState>((set) => ({
    isSearchOpen:false,
    query:'',
    toggleSearch:() => set((state) => ({
        isSearchOpen:!state.isSearchOpen
    })),
    setQuery:(query) => set({query})
}))