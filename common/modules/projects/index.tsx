"use client";
import Container from "@/common/components/elements/Container";
import WelcomeBanner from "./welcome-banner";
import ProjectList from "./project-list";

export default function ProjectPage() {
    return (
        <Container>
            <WelcomeBanner />
            <ProjectList />
        </Container>
    );
}
