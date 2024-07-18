import React, { forwardRef } from "react";

const Home = forwardRef((props: any, ref: any) => {
  return (
    <div className="bg-gray-100" ref={(homeref) => (ref.current[0] = homeref)}>
      <div className="mx-auto max-w-[1440px]">
        <div className={"min-h-[calc(100vh_-_81px)] flex items-center justify-center flex-col"}>
          <p className="text-[100px]">👋</p>
          <p className="text-[40px] text-center text-orange-600 font-bold">COMING SOON!</p>
          <p className="text-[40px] text-center text-orange-600 font-bold italic">
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

        <div className="h-[calc(100vh_-_81px)] flex items-center justify-center flex-col">
          <p className="text-[100px]">👋</p>
          <p className="text-[40px] text-center text-orange-600 font-bold">GRAND OPENING!</p>
          <p className="text-[40px] text-center text-orange-600 font-bold">GRAND OPENING!</p>
        </div>
      </div>
    </div>
  );
});

export default Home;
