import { createContext, PropsWithChildren, useContext, useState } from 'react';

const TimelinesContext = createContext<{
  active: number;
  setActive: (value: number) => void;
} | null>(null);

export const TimelinesProvider = ({ children }: PropsWithChildren) => {
  const [active, setActive] = useState<number | null>(1);

  return (
    <TimelinesContext.Provider value={{ active, setActive }}>{children}</TimelinesContext.Provider>
  );
};

export const useTimelines = () => {
  const context = useContext(TimelinesContext);

  if (!context) {
    throw new Error('useTimelines должен использоваться внутри TimelinesProvider');
  }

  return context;
};
