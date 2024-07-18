import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout } from "./pages/Layout";

function App() {
  return (
    <Layout />
    // <div className="App">
    // <Routes>
    //   <Route element={<Layout />}>
    //     <Route path="/*" element={<Navigate replace to="/home" />} />
    //     <Route path="/home" index element={<Home />} />
    //     {/* <Route path="/booking" index element={<Booking />} /> */}

    //     {/* <Route path="/mypage/:type" index element={<MyPage />} />
    //         <Route path="/accountissuance" index element={<VirtualAccountIssuance />} />
    //         <Route path="/board" index element={<Request />} />
    //         <Route path="/board" index element={<Request />} />
    //         <Route path="/design" index element={<TailwindSample />} /> */}
    //   </Route>
    // </Routes>
    // </div>
  );
}
export default App;
