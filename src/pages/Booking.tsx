import React, { forwardRef } from "react";

const Booking = forwardRef((props: any, ref: any) => {
  return (
    <div className="bg-gray-100" ref={(bookingRef) => (ref.current[1] = bookingRef)}>
      <div className="mx-auto max-w-[1440px]">
        <div className="min-h-[calc(100vh_-_81px)] flex items-center justify-center flex-col">
          <div>
            <p className="text-center text-slate-600 font-bold text-[40px] black-han-sans-regular">
              예약 안내
            </p>

            <div className="grid max-sm:grid-cols-1 grid-cols-2 w-full border border-orange-500 rounded-md bg-white mt-10">
              <div className="lg:p-20 p-10 w-full">
                <p className="text-2xl font-bold">홍대 1호점</p>

                <p className="text-sm mt-1">서울시 마포구 와우산로 21길 20 (B1F)</p>

                <p className="text-sm">홍익문화공원 앞 (홍대입구역 보도 10분)</p>
              </div>
              {/* <div className="p-20"></div> */}
              <div className="lg:p-20 p-10 flex items-center justify-center">
                <button
                  onClick={() => window.open("https://naver.com", "_blank", "noopener, noreferrer")}
                  className="bg-naver py-2 px-4 rounded-2xl flex"
                >
                  <p className="text-md font-bold text-white mr-6">네이버 예약</p>
                  <p className="text-md font-bold text-white">→</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Booking;
