import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen gap-3 text-red-500">
        <h2 className="text-9xl">404</h2>
        <button onClick={() => gotoHome()}>Go Back To Homepage</button>
      </div>
    </>
  );
}

export default ErrorPage;
