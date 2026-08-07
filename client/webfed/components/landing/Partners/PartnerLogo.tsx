import Image from "next/image";

import { Card } from "@repo/ui-web";

interface PartnerLogoProps {
  name: string;
  logo: string;
}

export function PartnerLogo({
  name,
  logo,
}: PartnerLogoProps) {
  return (
    <Card className="flex h-28 items-center justify-center p-6 transition-all duration-300 hover:shadow-lg">

      <Image
        src={logo}
        alt={name}
        width={140}
        height={70}
        className="h-auto max-h-12 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
      />

    </Card>
  );
}