'use client';
import Button from "@/common/components/elements/Button";
// import Card from "@/common/components/elements/Card";
import Container from "@/common/components/elements/Container";
import WelcomeBanner from "./components/welcome-banner";

export default function HomePage() {
    return (
        <Container>
            <WelcomeBanner />
            <Button>
                Click Me
            </Button>
        </Container>
    );
}