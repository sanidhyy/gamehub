import { PropsWithChildren } from "react";

export const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <aside className="fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2d2e35] z-50">
      {children}
    </aside>
  );
};
