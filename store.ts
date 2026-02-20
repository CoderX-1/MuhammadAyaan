import { create } from 'zustand';
import { CursorState, PreloaderState } from './types';

export const useCursorStore = create<CursorState>((set) => ({
  cursorVariant: 'default',
  setCursorVariant: (variant) => set({ cursorVariant: variant }),
}));

export const usePreloaderStore = create<PreloaderState>((set) => ({
  isLoading: true,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
