"use client";

import { createContext, useState, useEffect } from "react";

type CommandeProviderContextProps = {
  children: React.ReactNode;
};

interface CommandeContextValue {
  actAppendCondidat: number;
  setActAppendCondidat: (action: number) => void;
  actDeleteCondidat: number;
  setActDeleteCondidat: (action: number) => void;
  basketList: any;
  setBasketList: (action: any[]) => void;
  filter: (_id: any, opt: string) => any[];
}

export const CommandeContext = createContext<CommandeContextValue>({
  actAppendCondidat: 0,
  setActAppendCondidat: () => {},
  actDeleteCondidat: 0,
  setActDeleteCondidat: () => {},
  basketList: [],
  setBasketList: () => {},
  filter: () => [],
});

export const CommandeContextProvider = ({
  children,
}: CommandeProviderContextProps) => {
  const [actAppendCondidat, setActAppendCondidat] = useState<number>(0);
  const [actDeleteCondidat, setActDeleteCondidat] = useState<any>([]);
  const [basketList, setBasketList] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);

  const filter = (_id: any, opt: string) => {
    if (opt === "notIn")
      return contextValue?.basketList?.filter((dish: any) => dish._id !== _id);
    else
      return contextValue?.basketList?.filter((dish: any) => dish._id === _id);
  };

  useEffect(() => {
    const data = localStorage.getItem("basketList");
    if (data !== null) {
      const parsedData = JSON.parse(data);
      if (parsedData?.length != 0) {
        setBasketList(parsedData);
      }
    } else {
      localStorage.setItem("basketList", JSON.stringify([]));
    }
    // console.log("data");
    // console.log(data);
  }, []);

  useEffect(() => {
    if (mounted)
      localStorage.setItem(
        "basketList",
        JSON.stringify(contextValue?.basketList)
      );
    else setMounted(true);
  }, [basketList]);

  // Create the context value object
  const contextValue: CommandeContextValue = {
    actAppendCondidat,
    setActAppendCondidat,
    actDeleteCondidat,
    setActDeleteCondidat,
    basketList,
    setBasketList,
    filter,
  };

  return (
    <CommandeContext.Provider value={contextValue}>
      {children}
    </CommandeContext.Provider>
  );
};
