import { useContext } from "react";
import { ContextoIBGE } from "../contexts/ContextoIBGE";

export default function useIBGE() {
    return useContext(ContextoIBGE);
}