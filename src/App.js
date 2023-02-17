import React from "react";
import Router from "./router/Router";
import StoreProvider from "./store/StoreProvider";

export default function App() {
  return (
    <>
      <StoreProvider>
        <Router />
      </StoreProvider>
    </>
  );
}
