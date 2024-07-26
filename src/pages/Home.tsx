import React, { forwardRef } from "react";
import img1 from "../images/img1.jpeg";

const Home = forwardRef((props: any, ref: any) => {
  return (
    <div
      className="bg-gray-100 max-sm:pt-[192px] relative"
      ref={(homeref) => (ref.current[0] = homeref)}
    >
      <div className="mx-auto">
        <div
          className={
            "min-h-[calc(100vh_-_81px)] mt-[81px] max-md:mt-0 flex items-center justify-center flex-col bg-image md:bg-fixed"
          }
        >
          {/* <p className="text-[100px]">👋</p> */}

          <p className="text-[40px] text-center text-orange-600 font-bold black-han-sans-regular">
            COMING SOON!
          </p>

          <p className="text-[40px] text-center text-orange-600 font-bold italic black-han-sans-regular">
            2024.07.29 (월)
          </p>
        </div>

        <div className="max-sm:mt-0 mt-40 max-w-[1440px] mx-auto">
          {/* <div id="area">
            <iframe
              className="z-0"
              id="video"
              width="860"
              height="515"
              src="https://www.youtube.com/embed/I4T2jSo9Of4?si=MOAdA7oI8cSmAaXJ"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              // allowfullscreen
            ></iframe>
          </div> */}

          <div className="grid max-md:grid-cols-1 grid-cols-6 w-full gap-4 h-full my-20">
            <div className="max-md:col-start-1 max-md:p-4 col-start-2 col-span-2 flex items-center">
              <img src={img1} className="rounded-md" />
            </div>
            <div className="max-md:col-start-1 max-md:p-4  col-start-4 col-span-2 flex items-center">
              <div className="flex flex-col">
                <p className="text-3xl font-bold">Choose Your Adventure!</p>

                <p className="mt-8">
                  Gather your group of 2-5 and give it your all. More than 5? Split up and switch
                  teams, or mix and match smaller groups while you play.
                </p>

                <p className="mt-4">
                  Book online in advance to secure your spot. Walk-ins are welcome, but subject to
                  availability.
                </p>

                <button
                  onClick={() => window.open("https://naver.com", "_blank", "noopener, noreferrer")}
                  className="bg-naver py-2 px-4 rounded-2xl flex self-start mt-6"
                >
                  <p className="text-md font-bold text-white mr-6">네이버 예약</p>
                  <p className="text-md font-bold text-white">→</p>
                </button>
              </div>
            </div>
          </div>

          <div className="grid max-md:grid-cols-1 grid-cols-6 w-full gap-4 h-full">
            <div className="max-md:col-start-1 max-md:p-4  col-start-2 col-span-2 flex items-center">
              <div className="flex flex-col">
                <p className="text-3xl font-bold">Choose Your Adventure!</p>

                <p className="mt-8">
                  Gather your group of 2-5 and give it your all. More than 5? Split up and switch
                  teams, or mix and match smaller groups while you play.
                </p>

                <p className="mt-4">
                  Book online in advance to secure your spot. Walk-ins are welcome, but subject to
                  availability.
                </p>

                <button
                  onClick={() => window.open("https://naver.com", "_blank", "noopener, noreferrer")}
                  className="bg-naver py-2 px-4 rounded-2xl flex self-start mt-6"
                >
                  <p className="text-md font-bold text-white mr-6">네이버 예약</p>
                  <p className="text-md font-bold text-white">→</p>
                </button>
              </div>
            </div>

            <div className="max-md:col-start-1 max-md:p-4 col-start-4 col-span-2 flex items-center">
              <img src={img1} className="rounded-md" />
            </div>
          </div>
        </div>

        <div className={"min-h-[calc(100vh_-_81px)] flex items-center justify-center flex-col"}>
          <p className="text-[40px] text-center text-slate-600 font-bold black-han-sans-regular">
            모드 선택
          </p>
          <div className="grid max-md:grid-cols-1 grid-cols-6 w-full gap-4 mt-10">
            <div className="max-md:col-start-1 max-md:p-4 col-start-2 col-span-2">
              <div className="bg-gradient-to-r from-orange-400 to-orange-700 w-full h-full rounded-md p-10">
                <p className="text-2xl text-white font-extrabold">매치모드</p>
                <div className="my-1">
                  <p className="text-white font-semibold text-xl">1 vs 1</p>
                  <p className="text-white font-semibold text-xl">2 vs 2</p>
                  <p className="text-white font-semibold text-xl">3 vs 3</p>
                </div>

                <p className="text-lg text-white">
                  같은 방에서 짝수 플레이어가 진행, 서로 매치합니다.
                </p>
              </div>
            </div>
            <div className="max-md:col-start-1 max-md:p-4  col-start-4 col-span-2">
              <div className="bg-gradient-to-r from-orange-400 to-orange-700  w-full h-full rounded-md p-10">
                <p className="text-2xl text-white font-extrabold">일반모드</p>

                <p className="text-lg text-white my-2">
                  최소 1명, 최대 6명의 플레이어가 함께 점수를 올립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;
