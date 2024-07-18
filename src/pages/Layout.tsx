import React, { useEffect, useRef, useState } from "react";
import logo from "../images/logo.png";
import Home from "./Home";
import Booking from "./Booking";
import Brand from "./Brand";

export const Layout = () => {
  const [navIndex, setNavIndex] = useState<any>(null);
  const scrollRef = useRef<any>([]);
  const navRef = useRef<any>([]);

  const DETAIL_NAV = [
    { idx: 0, name: "소개" },
    { idx: 1, name: "예약" },
    { idx: 2, name: "브랜드" },
    { idx: 3, name: "가맹 및 제휴 문의" },
  ];

  useEffect(() => {
    scrollRef.current[navIndex]?.scrollIntoView({ behavior: "smooth", block: "end" });
    setNavIndex(null);
  }, [scrollRef, navIndex]);

  // 현재 스크롤 위치에 따라 NavBar 버튼 스타일이 바뀌도록 클래스명을 지정한다.
  useEffect(() => {
    const changeNavBtnStyle = () => {
      scrollRef.current.forEach((ref: any, idx: any) => {
        if (ref.offsetTop - 180 < window.scrollY) {
          navRef?.current.forEach((ref: any) => {
            ref.className = ref.className.replace(" active", "");
          });

          navRef.current[idx].className += " active";
        }
      });
    };

    window.addEventListener("scroll", changeNavBtnStyle);

    return () => {
      window.removeEventListener("scroll", changeNavBtnStyle);
    };
  }, [scrollRef]);

  return (
    <div className="mx-auto  min-h-screen">
      <div className="z-10 w-full border-b fixed bg-white top-0">
        <nav className="grid lg:grid-cols-4 max-sm:grid-cols-1 mx-auto max-w-[1440px] h-[81px] max-sm:h-fit">
          <div className="h-full flex items-center max-lg:justify-center max-sm:py-2">
            <div>
              <img src={logo} className="w-[200px]" />
            </div>
            {/* <p className="text-2xl font-bold text-orange-600 italic">PUMP ARCADE</p> */}
          </div>
          <div className="lg:col-span-2 col-span-1 h-full flex max-sm:block max-sm:py-2 items-center justify-center flex-wrap">
            {DETAIL_NAV.map(({ idx, name }) => (
              <div
                className={`mr-10 max-sm:mr-0 hover:text-orange-600 cursor-pointer text-center max-sm:mb-2`}
                key={idx}
                ref={(ref) => (navRef.current[idx] = ref)}
                onClick={() => {
                  setNavIndex(idx);
                }}
              >
                {name}
              </div>
            ))}
          </div>
          <div className="hidden lg:flex h-full flex items-center justify-end flex-wrap">
            <button className="bg-slate-900 text-white px-[8px] font-bold py-[2px] active:scale-90">
              👷 문의하기
            </button>
          </div>
        </nav>
      </div>

      {/* layout */}
      <div className="min-h-[calc(100vh_-_81px)]">
        {/* <div> */}
        <Home ref={scrollRef} />
        <Booking ref={scrollRef} />
        <Brand ref={scrollRef} />
        {/* <Outlet /> */}
        {/* </div> */}
      </div>
    </div>
  );
};
