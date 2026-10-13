"use client";

import Container from "@/common/components/elements/Container";
import WelcomeBanner from "./welcome-banner";
import AchievementList from "./achievement-list";

export default function AchievementPage() {
  return (
    <Container>
      <WelcomeBanner />
      <AchievementList />
    </Container>
  );
}
