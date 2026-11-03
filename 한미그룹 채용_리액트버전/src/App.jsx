import { useEffect } from "react";
import {
  ApplySection,
  ExpositionSection,
  FutureSection,
  Header,
  HeroSection,
  HistorySection,
  JobsSection,
  LinksSection,
  RequirementsSection,
  ScrollMotionToggle,
  SiteFooter,
  TasksSection,
} from "./components/SiteSections.jsx";
import WelfareSection from "./components/WelfareSection.jsx";

const scripts = [
  `${import.meta.env.BASE_URL}js/scroll.js`,
  `${import.meta.env.BASE_URL}js/main.js`,
  `${import.meta.env.BASE_URL}hanmi-eye-tracking/hanmi-eye-tracking/metadata.js`,
  `${import.meta.env.BASE_URL}hanmi-eye-tracking/hanmi-eye-tracking/player.js`,
];

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`스크립트를 불러오지 못했습니다: ${src}`));
    document.body.appendChild(script);
  });
}

export default function App() {
  useEffect(() => {
    let cancelled = false;

    async function initializePage() {
      try {
        for (const src of scripts) {
          await loadScript(src);
          if (cancelled) return;
        }
      } catch (error) {
        console.error("채용 페이지를 초기화하지 못했습니다.", error);
      }
    }

    initializePage();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <ScrollMotionToggle />
      <Header />
      <main>
        <HeroSection />
        <FutureSection />
        <HistorySection />
        <JobsSection />
        <WelfareSection />
        <TasksSection />
        <RequirementsSection />
        <ExpositionSection />
        <LinksSection />
        <ApplySection />
      </main>
      <SiteFooter />
    </>
  );
}
