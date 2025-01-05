'use client'

import MiddleSection from "@/components/MiddleSection";
import MobileHeader from "@/components/MobileHeader";
import RightSection from "@/components/RightSection";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Home() {
  const isMobile = useIsMobile()
  return (
    <div className="container mx-auto">
        { isMobile && <MobileHeader/> }

      {/* Two Column Layout */}
      <div className="grid grid-cols-12 p-4 gap-4">
        <div className="col-span-12 2xl:col-span-8 xl:col-span-8">
          <MiddleSection />
        </div>

        <div className="col-span-12 2xl:col-span-4 xl:col-span-4">
          <RightSection/>
        </div>
      </div>
    </div>
  );
}
