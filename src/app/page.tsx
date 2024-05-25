import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/app2.module.css";
// import AppTable from "@/components/app.table";
import type { Metadata } from "next";
// import { useEffect } from "react";
// import useSWR from "swr";

export const metadata: Metadata = {
  title: "HomePage",
  description: "Description bla bla ...",
};

export default function Home() {
  // const res = fetch("http://localhost:8008/blogs");
  // console.log("Check response : ", res);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:8008/blogs");
  //     // console.log("Check response : ", res.json());
  //     const data = await res.json();
  //     console.log("check DATA :", data);
  //   };
  //   fetchData();
  // }, []);

  // Use library useSwr : (Link doc => 'https://swr.vercel.app' )

  return (
    <div>
      {/* <div>{data?.length}</div> */}
      <ul>
        <li className={x["red"]}>
          <Link href={"/facebook"}>
            <span className={y["red"]}>Facebook</span>
          </Link>
        </li>
        <li className={x["green"]}>
          <Link href={"/tiktok"}>
            <span className={y["green"]}>Tiktok</span>
          </Link>
        </li>
        <li className={x["orange"]}>
          <Link href={"/twitter"}>
            <span className={y["orange"]}>Twitter</span>
          </Link>
        </li>
        <li className={x["white"]}>
          <Link href={"/youtube"}>
            <span className={y["white"]}>Youtube</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
