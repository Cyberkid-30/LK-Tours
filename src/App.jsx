import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <main className="min-h-screen flex flex-col bg-car py-5 px-10 overflow-x-hidden overflow-y-auto text-white">
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
