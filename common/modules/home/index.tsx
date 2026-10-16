"use client";
import Container from "@/common/components/elements/Container";
import WelcomeBanner from "./welcome-banner";
import HelloCard from "./cards/hello-card";
import FeaturedProjectCard from "./cards/featured-project-card";
import SkillsCard from "./cards/skills-card";
import ExperienceCard from "./cards/experience-card";
import HighlightsCard from "./cards/highlights-card";
import LearningCard from "./cards/learning-card";
import FindMeCard from "./cards/find-me-card";
import NextStepCard from "./cards/next-step-card";

/**
 * Home page (PRD §3.1) — bento grid below the welcome banner.
 *
 * Layout (≥ lg):
 *   Row 1: [01 Hello]        [Featured Project]
 *   Row 2: [02 Core Skills]  [03 Experience]
 *   Row 3: [04 Highlights] [05 Learning] [06 Find Me!] [07 Next Step!]
 *
 * Cards 5–8 are intentionally smaller than cards 1–4 (bento variance).
 * DESIGN.md §1/§4: bento grid is the primary visual system.
 */
export default function HomePage() {
    return (
        <Container>
            <WelcomeBanner />

            <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
                <HelloCard />
                <FeaturedProjectCard />
                <SkillsCard />
                <ExperienceCard />
            </div>

            <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <HighlightsCard />
                <LearningCard />
                <FindMeCard />
                <NextStepCard />
            </div>
        </Container>
    );
}
