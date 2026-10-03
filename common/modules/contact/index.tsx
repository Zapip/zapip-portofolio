"use client";

import Container from "@/common/components/elements/Container";
import WelcomeBanner from "./welcome-banner";
import SocialMediaList from "./social-media-list";
import EmailForm from "./email-form";

export function ContactPage() {
  return (
    <Container>
      <WelcomeBanner />

      {/* Two-column layout: social left, form right. Stack on mobile. */}
      <section className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-2">
        <SocialMediaList />
        <EmailForm />
      </section>
    </Container>
  );
}