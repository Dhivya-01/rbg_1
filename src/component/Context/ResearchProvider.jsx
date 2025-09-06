/* eslint-disable react/prop-types */
import { ResearchContext } from "./Context";

export default function ResearchProvider({ children }) {
  const value = {};
  return (
    <ResearchContext.Provider value={value}>
      {children}
    </ResearchContext.Provider>
  );
}
