import { ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  color: string;
}

export interface CursorState {
  cursorVariant: 'default' | 'text' | 'button' | 'project';
  setCursorVariant: (variant: 'default' | 'text' | 'button' | 'project') => void;
}

export interface PreloaderState {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export interface MagneticProps {
  children: ReactNode;
  strength?: number;
}
