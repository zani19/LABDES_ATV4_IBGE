import { createContext, useEffect, useState } from "react";
import { ContextProps, MesoProps, RegiaoProps, UfProps } from "../types";
import ibge from "../services/Ibge";

export const ContextoIBGE = createContext({} as ContextProps);

export function ProviderIBGE({ children }: any) {
  const [regioes, setRegioes] = useState([] as RegiaoProps[]);
  const [ufs, setUfs] = useState([] as UfProps[]);
  const [ufLoading, setUfLoading] = useState(false);
  const [mesoLoading, setMesoLoading] = useState(false);
  const [cidades, setCidades] = useState([] as MesoProps[]);

  useEffect(() => {
    ibge.getRegioes().then((r) => setRegioes(r));
  }, []);

  function getUfs(idRegiao: number) {
    setUfs([]);
    setCidades([]);
    
    setUfLoading(true);
    ibge
      .getUfPorRegiao(idRegiao)
      .then((r) => setUfs(r))
      .finally(() => setUfLoading(false));
  }
  function getCidades(sigla: string) {
    setMesoLoading(true);
    ibge.getMesoPorUf(sigla).then((r) => setCidades(r)).finally(() => setMesoLoading(false));
  }

  return (
    <ContextoIBGE.Provider
      value={{ regioes, ufs, cidades, ufLoading, mesoLoading, getUfs, getCidades }}
    >
      {children}
    </ContextoIBGE.Provider>
  );
}
