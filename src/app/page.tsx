import Brochure from "../../components/Brochure/Brochure";
import PinnedPaper from "../../components/PinnedPaper/PinnedPaper";
import PinnedPaperGreen from "../../components/PinnedPaperGreen/PinnedPaperGreen";
import StickyPaper from "../../components/StickyPaper/StickyPaper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <section className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row items-center justify-between">
        <PinnedPaperGreen />
        <StickyPaper />
        <PinnedPaper />
      </section>
      <Brochure />
    </main>
  );
}
