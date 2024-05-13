"use client";

import { useRouter } from "next/navigation";

const FacebookPage = () => {
  const router = useRouter();
  const handleBackHomePage = () => {
    router.push("/");
  };
  return (
    <div>
      <h3>FACEBOOK PAGE</h3>
      <div>
        <button onClick={() => handleBackHomePage()}>BACK HOME</button>
      </div>
    </div>
  );
};
export default FacebookPage;
