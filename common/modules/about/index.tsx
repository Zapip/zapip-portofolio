"use client";

import Container from "@/common/components/elements/Container";
import Separator from "@/common/components/elements/Separator";
import WelcomeBanner from "./welcome-banner";
import ProfileSection from "./profile-section";
import ExperienceSection from "./experience-section";
import EducationSection from "./education-section";

export function AboutPage() {
  return (
    <Container>
      <WelcomeBanner />
      <ProfileSection />
      <Separator horizontal={true} marginY="my-6" isDisplay={true} />
      <ExperienceSection />
      <Separator horizontal={true} marginY="my-6" isDisplay={true} />
      <EducationSection />
    </Container>
  );
}