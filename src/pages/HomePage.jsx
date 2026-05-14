import { lazy, Suspense } from 'react';
import Hero from '../components/Hero';

const About = lazy(() => import('../components/About'));
const Projects = lazy(() => import('../components/Projects'));
const Skills = lazy(() => import('../components/Skills'));
const Contact = lazy(() => import('../components/Contact'));
const Footer = lazy(() => import('../components/Footer'));

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
}
