"use client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useRouter } from "next/navigation";
import useSWR, { Fetcher } from "swr";

const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  // console.log("CHECK ID :", params.id);
  const router = useRouter();

  const fetcher: Fetcher<IBlog, string> = (url: string) =>
    fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `http://localhost:8008/blogs/${params.id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>Failed to load</div>;
  }

  const handleGoBackBlogsPage = () => {
    router.push("/blogs");
  };

  return (
    <>
      <div>VIEW DETAIL OF CONTENT BLOG & NAME AUTHOR = {params.id}</div>
      <div className="mt-3 mb-3">
        <Button variant="success" onClick={() => handleGoBackBlogsPage()}>
          GO BACK
        </Button>
      </div>
      <Card className="text-center">
        <Card.Header>
          Title : <strong> {data?.title}</strong>
        </Card.Header>
        <Card.Body>
          <Card.Text>{data?.content}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          Author : <strong>{data?.author}</strong>
        </Card.Footer>
        {/* Work update days !!!  */}
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </>
  );
};

export default ViewDetailBlog;
