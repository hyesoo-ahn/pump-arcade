import React, { forwardRef } from "react";

const Brand = forwardRef((props: any, ref: any) => {
  return (
    <div className="bg-gray-100" ref={(brandRef) => (ref.current[2] = brandRef)}>
      <div className="mx-auto max-w-[1440px]">
        <div className="min-h-[calc(100vh_-_81px)] flex items-center justify-center flex-col">
          <p className="text-[100px]">👋</p>
          <p className="text-[40px] text-center text-orange-600 font-bold">브랜드</p>
          <p>페이지 준비중입니다...</p>
        </div>
      </div>
    </div>
  );
});

export default Brand;
