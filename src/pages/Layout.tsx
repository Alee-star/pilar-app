import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
  setSelectedView: React.Dispatch<React.SetStateAction<string>>;
}

const Layout: React.FC<LayoutProps> = ({ children, setSelectedView }) => {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar setSelectedView={setSelectedView} />
        <main className="w-full overflow-y-auto p-4 bg-white">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
