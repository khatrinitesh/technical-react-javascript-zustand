import { create } from "zustand";
import { AutocompleteState } from "../interface";

export const useAutocompleteStore = create<AutocompleteState>((set) => ({
    query:'',
    setQuery:(query) => set({
        query
    }),
    setSuggestions:(suggestions) => set({
        suggestions
    })
}))