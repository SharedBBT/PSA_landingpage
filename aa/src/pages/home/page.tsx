import Header from '../../components/feature/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
// import FeaturesSection from './components/FeaturesSection';
import TransformationSection from './components/TransformationSection';
import ProgramSection from './components/ProgramSection';
import IntroductionSection from './components/IntroductionSection';
import LearningCycleSection from './components/LearningCycleSection';
// import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-noto-sans">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      {/* <FeaturesSection /> */}
      <TransformationSection />
      <ProgramSection />
      <IntroductionSection />
      <LearningCycleSection />
      {/* <CTASection /> */}
      <Footer />
    </div>
  );
}