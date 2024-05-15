"use client";
import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/app2.module.css";
import AppTable from "@/components/app.table";
import { useEffect } from "react";

export default function Home() {
  // const res = fetch("http://localhost:8008/blogs");
  // console.log("Check response : ", res);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8008/blogs");
      // console.log("Check response : ", res.json());
      const data = await res.json();
      console.log("check DATA :", data);
    };
    fetchData();
  }, []);

  return (
    <div>
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
      <AppTable />
    </div>
  );
}
