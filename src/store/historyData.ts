import { create } from "zustand";

export const histroyStore = create((set) => ({
  history: ["0"],

  AddHistory: (newHistory: string) =>
    set((state: any) => ({
      history: [...state.history, newHistory],
    })),
}));
