import { create } from 'zustand';

type Store = {
  selectedItem: string;
  searchTxt: string;
  setSelectedItem: (item: string) => void;
  setSearchTxt: (txt: string) => void;
};

const useStore = create<Store>(set => ({
  selectedItem: '',
  searchTxt: '',
  setSelectedItem: item => set({ selectedItem: item }),
  setSearchTxt: txt => set({ searchTxt: txt }),
}));

export default useStore;
