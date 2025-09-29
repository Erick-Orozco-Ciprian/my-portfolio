import Layout from "../layouts/layout";
import AboutPreview from "../components/section/aboutPreview";
import FeaturedProjects from "../components/section/featuredProjects";
import ContactForm from "../components/section/contactForm";
import IntroSection from "../components/section/introSection";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section / Intro */}
      <IntroSection />

      {/* About Preview Section */}
      <AboutPreview />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Contact Form */}
      <ContactForm />
    </Layout>
  );
}
