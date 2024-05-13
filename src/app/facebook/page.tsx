"use client";

import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const FacebookPage = () => {
  const router = useRouter();
  const handleBackHomePage = () => {
    router.push("/");
  };
  return (
    <div>
      <h3>FACEBOOK PAGE</h3>
      <div>
        <Button variant="success">I am dev</Button>
        <button onClick={() => handleBackHomePage()}>BACK HOME</button>
      </div>
    </div>
  );
};
export default FacebookPage;
