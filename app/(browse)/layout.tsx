import { PropsWithChildren } from "react";

import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

const BrowseLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default BrowseLayout;
