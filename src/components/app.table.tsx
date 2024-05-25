"use client";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import CreateModal from "./create.modal";
import { useState } from "react";
import UpdateModal from "./update.modal";
import Link from "next/link";
import { headers } from "next/dist/client/components/headers";
import { toast } from "react-toastify";
import { mutate } from "swr";
interface IProps {
  blogs: IBlog[];
}

function AppTable(props: IProps) {
  const { blogs } = props;
  //console.log(">>>> Check props blogs :", blogs);
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);

  const handleDeleteBlog = (id: number) => {
    if (confirm(`Do you want to delete this Blog (id = ${id})`)) {
      fetch(`http://localhost:8008/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            toast.success("Delete blog succeed !! 👌👌");
            mutate("http://localhost:8008/blogs");
          }
        });
    }
  };

  return (
    <>
      <div
        className="mb-3"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h3>Table Blogs</h3>
        <Button variant="secondary" onClick={() => setShowModalCreate(true)}>
          Add new
        </Button>
      </div>
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
            {/* <th>Content</th> */}
          </tr>
        </thead>
        <tbody>
          {blogs?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <ButtonGroup vertical>
                    <Link
                      className="btn btn-success mt-3"
                      href={`/blogs/${item.id}`}
                    >
                      View
                    </Link>

                    <Button
                      variant="warning"
                      className="my-3"
                      onClick={() => {
                        setBlog(item);
                        setShowModalUpdate(true);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      className="my-3"
                      onClick={() => handleDeleteBlog(item.id)}
                    >
                      delete
                    </Button>
                  </ButtonGroup>
                </td>
                {/* <td>{item.content}</td> */}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <CreateModal
        showModalCreate={showModalCreate}
        setShowModalCreate={setShowModalCreate}
      />
      <UpdateModal
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
        blog={blog}
        setBlog={setBlog}
      />
    </>
  );
}

export default AppTable;
