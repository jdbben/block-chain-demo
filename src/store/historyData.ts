import { create } from "zustand";

type HistoryState = {
  history: string[];
  AddHistory: (newHistory: string, index: number) => void;
};

export const historyStore = create<HistoryState>((set) => ({
  history: ["0"],

  AddHistory: (newHistory, index) =>
    set((state) => {
      const updatedHistory = [...state.history];
      if (state.history[index] !== "") {
        updatedHistory[index] = newHistory;
      } else {
        updatedHistory.push(newHistory);
      }

      return { history: updatedHistory };
    }),
}));
