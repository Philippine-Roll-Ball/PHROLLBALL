"use client";

import Link from "next/link";

import {
    Navbar,
    NavbarContainer,
    NavbarLogo,
    NavbarNavigation,
    NavbarItem,
    NavbarActions,
    NavbarMobile,
    Logo,
    Button,
} from "@repo/ui-web";

import { navigation } from "@/data/navigation";

export function NavbarSection() {
    return (
        <Navbar variant="blur">

            <NavbarContainer>

                <NavbarLogo>

                    <Link href="/">

                        <Logo
              src="/images/PRBALOGO.png"
              title="Philippine Roll Ball Federation"
              subtitle="National Governing Body"
              size="lg"
            />

                    </Link>

                </NavbarLogo>

                <NavbarNavigation>

                    {navigation.map((item) => (

                        <NavbarItem
                            key={item.href}
                            href={item.href}
                        >
                            {item.title}
                        </NavbarItem>

                    ))}

                </NavbarNavigation>

                <NavbarActions>

                    <Button
                        variant="ghost"
                    >
                        Member Login
                    </Button>

                     <Link href="/join">
                        <Button>
                            Join Federation
                        </Button>
                    </Link>


                </NavbarActions>

                <NavbarMobile />

            </NavbarContainer>

        </Navbar>
    );
}