import { createContext, useContext, useState } from 'react';

// Shared state for the merged Experience/Education section so the navbar
// (mounted in the layout) and the section (mounted on the home route) can
// agree on which tab is active — even across route changes.
const ResumeTabContext = createContext(null);

export function ResumeTabProvider({ children }) {
  const [tab, setTab] = useState('experience'); // 'experience' | 'education'
  return (
    <ResumeTabContext.Provider value={{ tab, setTab }}>
      {children}
    </ResumeTabContext.Provider>
  );
}

export function useResumeTab() {
  const ctx = useContext(ResumeTabContext);
  if (!ctx) throw new Error('useResumeTab must be used within ResumeTabProvider');
  return ctx;
}
