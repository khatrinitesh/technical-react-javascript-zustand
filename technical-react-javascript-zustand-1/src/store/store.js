import { create } from "zustand";

const useStore = create((set) => ({
 count:0,
 user:{
  name:'',
  age:0
 },
 // actions 
 increment:() => set((state) => ({count:state.count + 1})),
 decrement:() => set((state) => ({count:state.count - 1})),
 setUser:(user) => set({user }) // Fix: Update the user state
}));


export default useStore;