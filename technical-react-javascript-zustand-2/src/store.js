import create from 'zustand';

const useStore = create((set) => ({
  currentPage: 'about',
  setCurrentPage: (page) => set({ currentPage: page }),
}));

export default useStore;