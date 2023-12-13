import { notFound } from "next/navigation";

import { Actions } from "./_components/actions";
import { getUserByUsername } from "@/lib/user-service";
import { isFollowingUser } from "@/lib/follow-service";
import { isBlockedByUser } from "@/lib/block-service";

type UserPageProps = {
  params: {
    username: string;
  };
};

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user) notFound();

  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  return (
    <div className="flex flex-col gap-y-4">
      <p>Username: {params.username}</p>
      <p>User ID: {user.id}</p>
      <p>Following: {isFollowing ? "Yes" : "No"}</p>
      <p>Blocked: {isBlocked ? "Yes" : "No"}</p>
      <Actions userId={user.id} isFollowing={isFollowing} />
    </div>
  );
};

export default UserPage;
