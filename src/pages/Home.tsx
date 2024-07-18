import React, { forwardRef } from "react";

const Home = forwardRef((props: any, ref: any) => {
  return (
    <div
      className="bg-gray-100 max-sm:pt-[192px] relative"
      ref={(homeref) => (ref.current[0] = homeref)}
    >
      <div className="mx-auto">
        <div
          className={
            "min-h-[calc(100vh_-_81px)] mt-[81px] max-md:mt-0 flex items-center justify-center flex-col bg-image bg-fixed"
          }
        >
          {/* <p className="text-[100px]">👋</p> */}

          <p className="text-[40px] text-center text-orange-600 font-bold black-han-sans-regular">
            COMING SOON!
          </p>

          <p className="text-[40px] text-center text-orange-600 font-bold italic black-han-sans-regular">
            2024.07.19 (금)
          </p>
        </div>

        <div className="max-sm:mt-0 mt-[81px] h-[calc(100vh_-_81px)] flex items-center justify-center flex-col">
          <div id="area">
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
