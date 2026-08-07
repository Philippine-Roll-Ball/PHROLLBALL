import Link from "next/link";

import {
  Container,
  Logo,
  Paragraph,
} from "@repo/ui-web";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">

      <Container>

        <div className="grid gap-12 py-16 lg:grid-cols-4">

          {/* Brand */}

          <div className="lg:col-span-2">

            <Logo
              src="/images/PRBALOGO.png"
              title="Philippine Roll Ball Association"
              subtitle="National Governing Body"
              size="lg"
            />

            <Paragraph className="mt-6 max-w-md">
              The Philippine Roll Ball Association (PRBA) is the
              official governing body dedicated to promoting,
              developing, and strengthening Roll Ball throughout
              the Philippines.
            </Paragraph>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about">
                  About
                </Link>
              </li>

              <li>
                <Link href="/events">
                  Events
                </Link>
              </li>

              <li>
                <Link href="/news">
                  News
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 font-semibold">
              Contact
            </h3>

            <ul className="space-y-3">

              <li>info@philippinerollball.org</li>

              <li>+63 (2) 8888-1234</li>

              <li>Manila, Philippines</li>

            </ul>

          </div>

        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t py-6 text-sm md:flex-row">

          <Paragraph>
            © {new Date().getFullYear()} Philippine Roll Ball Association. All Rights Reserved.
          </Paragraph>

          <div className="flex gap-6">

            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms of Service
            </Link>

          </div>

        </div>

      </Container>

    </footer>
  );
}