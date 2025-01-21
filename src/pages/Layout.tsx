import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

interface LayoutProps {
  setSelectedView: React.Dispatch<React.SetStateAction<string>>;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ setSelectedView }) => {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar setSelectedView={setSelectedView} />
        <main className="w-full overflow-y-auto p-4 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
