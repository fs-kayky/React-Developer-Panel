import { SideBarProvider } from "../../contexts/SideBarContext";
import { ChildrenNodeType } from "../../types/ChildrenTypes";
import Header from "../header";
import Sidebar from "../sidebar";
import * as C from "./styles";

const Layout = ({ children }: ChildrenNodeType) => {
  return (
    <C.Container>
      <SideBarProvider>
      <Header/>
      <Sidebar/>
      </SideBarProvider>
      {children}
    </C.Container>
  );
};

export default Layout;
