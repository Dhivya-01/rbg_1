import { createContext } from "react";

export const HomeContext = createContext();
export const AboutContext = createContext();
export const ResearchContext = createContext();

const Context = { HomeContext, AboutContext, ResearchContext };

export default Context;
