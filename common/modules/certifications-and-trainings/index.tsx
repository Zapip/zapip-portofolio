"use client";
import Container from "@/common/components/elements/Container";
import WelcomeBanner from "./welcome-banner";
import CertificationAndTrainingList from "./certifications-and-trainings-list";

export default function CertificationAndTrainingPage() {
    return (
        <Container>
            <WelcomeBanner />
            <CertificationAndTrainingList />
        </Container>
    );
}
