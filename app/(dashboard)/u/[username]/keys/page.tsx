import { UrlCard } from "./_components/url-card";
import { KeyCard } from "./_components/key-card";

import { Button } from "@/components/ui/button";
import { getSelf } from "@/lib/auth-service";
import { getStreamByUserId } from "@/lib/stream-service";

const KeysPage = async () => {
  const self = await getSelf();
  const stream = await getStreamByUserId(self.id);

  if (!stream) throw new Error("Stream not found.");

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1>Keys &amp; URLs</h1>

        <Button variant="primary">Generate</Button>
      </div>

      <div className="space-y-4">
        <UrlCard value={stream.serverUrl} />
        <KeyCard value={stream.streamKey} />
      </div>
    </div>
  );
};

export default KeysPage;
