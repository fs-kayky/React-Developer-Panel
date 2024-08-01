import { ChildrenNodeType } from "../types/ChildrenTypes";
import { createContext, useState } from "react";

type SidebarType = {
    wrapperSideBar: () => void;
    isOpen: boolean;
}

export const SideBarContext = createContext({} as SidebarType)

export const SideBarProvider = ({ children }: ChildrenNodeType) => {
    const [isOpen, setIsOpen] = useState(false);

    function wrapperSideBar() {
        return setIsOpen(!isOpen);
      }

      return (
        <SideBarContext.Provider value={{isOpen, wrapperSideBar}}>
            {children}
        </SideBarContext.Provider>
      )

} 