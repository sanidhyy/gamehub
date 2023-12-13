import { create } from "zustand";

type CreateSidebarStore = {
  collapsed: boolean;
  onExpand: () => void;
  onCollapse: () => void;
};

export const useCreatorSidebar = create<CreateSidebarStore>((set) => ({
  collapsed: false,
  onExpand: () => set(() => ({ collapsed: false })),
  onCollapse: () => set(() => ({ collapsed: true })),
}));
