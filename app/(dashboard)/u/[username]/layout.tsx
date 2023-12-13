import { redirect } from "next/navigation";

import { getSelfByUsername } from "@/lib/auth-service";
import { Container } from "./_components/container";
import { Sidebar } from "./_components/sidebar";
import { Navbar } from "./_components/navbar";

type CreatorLayoutProps = {
  params: {
    username: string;
  };
  children: React.ReactNode;
};

const CreatorLayout = async ({ children, params }: CreatorLayoutProps) => {
  const self = await getSelfByUsername(params.username);

  if (!self) redirect("/");

  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default CreatorLayout;
