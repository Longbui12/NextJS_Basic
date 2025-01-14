import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/facebook"}>Facebook</Link>
        </li>
        <li style={{ margin: "20px 0" }}>
          <a href="/tiktok">TikTok</a>
        </li>
        <li style={{ margin: "20px 0" }}>
          <a href="/twitter">Twitter</a>
        </li>
        <li>
          <a href="/youtube">Youtube</a>
        </li>
      </ul>
    </div>
  );
}
