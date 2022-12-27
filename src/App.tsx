import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/introService/Footer";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { debounce } from "lodash";
import { SET_WINDOW_SIZE } from "redux/slices/PlayApp";

import "./App.scss";

function App() {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.page);
  // 탭플레이스 앱에서 들어갈 시 헤더와 푸터를 없앱니다
  const userAgent = window.navigator.userAgent.includes("TAPPLACE_APP");

  // 리사이즈 이벤트
  const handleResize = debounce(() => {
    dispatch(
      SET_WINDOW_SIZE({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    );
  }, 300);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // lazy import
  const ServicePage = lazy(() => import("pages/Service"));
  const NoticePage = lazy(() => import("pages/Notice"));
  const FaqPage = lazy(() => import("pages/Faq"));
  const PlayAppPage = lazy(() => import("pages/AppMain"));
  const ConsentPage = lazy(() => import("pages/Consent"));
  const PolicyPage = lazy(() => import("pages/Policy"));

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {userAgent ? "" : <Header />}
        <main id="mainContainer">
          <Routes>
            <Route path="/" element={<ServicePage />} />
            {/* <Route path="/notice" element={<Notice />} /> */}
            {/* <Route path="/faq" element={<Faq />} /> */}
            <Route path="/playapp" element={<PlayAppPage />} />
            <Route path="/consent" element={<ConsentPage />} />
            <Route path="/policy" element={<PolicyPage />} />
          </Routes>
          {page !== "playapp" && !userAgent && <Footer />}
        </main>
      </Suspense>
    </>
  );
}

export default App;
