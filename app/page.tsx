import MiddleSection from "@/components/MiddleSection";
import RightSection from "@/components/RightSection";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* Two Column Layout */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <MiddleSection />
        </div>

        <div className="col-span-4">
          <RightSection/>
        </div>
      </div>
    </div>
  );
}
