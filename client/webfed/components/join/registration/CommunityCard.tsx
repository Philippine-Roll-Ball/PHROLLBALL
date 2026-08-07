import Image from "next/image";

import {
  Card,
} from "@repo/ui-web";

export function CommunityCard() {
  return (
    <Card className="overflow-hidden p-0">

      <div className="relative h-72">

        <Image
          src="/images/join/community.jpg"
          alt="Roll Ball Community"
          fill
          className="object-cover"
        />

      </div>

    </Card>
  );
}