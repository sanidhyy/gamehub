import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-3xl">Dashboard</h1>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
}
