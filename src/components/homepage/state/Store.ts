import { create } from "zustand";

const useStore = create((set) => ({
  widthNumber: 0,
  widthContainer: (width) => set((state) => ({ widthNumber: width })),
}));

export default useStore;
