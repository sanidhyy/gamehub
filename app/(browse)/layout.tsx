import { PropsWithChildren } from "react";

import { Navbar } from "./_components/navbar";

const BrowseLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">{children}</div>
    </>
  );
};

export default BrowseLayout;
