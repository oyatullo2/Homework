import { useState } from "react";
import { AccountSection } from "./section/section";
import { AccountSideBar } from "./sidebar/sidebar";
export const Account = () => {
  const [translateY, setTranslateY] = useState("100%");
  const [translateX, setTranslateX] = useState("-100%");

  const interval = setTimeout(() => {
    setTranslateY("0%");
    setTranslateX("0%");
    return () => clearInterval(interval);
  }, 1000);

  return (
    <>
      <div className="flex w-full h-[92vh]">
        <div
          className="flex w-full max-w-[330px] bg-[#FAFAFA]"
          style={{ transform: `translateX(${translateX})` }}
        >
          <AccountSideBar />
        </div>
        <div
          className="w-full bg-[#FFF6EE]"
          style={{ transform: `translateY(${translateY})` }}
        >
          <AccountSection />
        </div>
      </div>
    </>
  );
};
