import { currentUser } from "@clerk/nextjs";

import { StreamPlayer } from "@/components/stream-player";
import { getUserByUsername } from "@/lib/user-service";

type CreatorPageProps = {
  params: Promise<{
    username: string;
  }>;
};

const CreatorPage = async ({ params }: CreatorPageProps) => {
  const { username } = await params;
  const externalUser = await currentUser();
  const user = await getUserByUsername(username);

  if (!user || user.externalUserId !== externalUser?.id || !user.stream)
    throw new Error("Unauthorized.");

  return (
    <div className="h-full">
      <StreamPlayer user={user} stream={user.stream} isFollowing />
    </div>
  );
};

export default CreatorPage;
