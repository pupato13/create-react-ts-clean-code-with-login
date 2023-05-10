import { useContext } from "react";
import { LayoutContext } from "@/presentation/contexts";

export const useLayout = () => useContext(LayoutContext);
