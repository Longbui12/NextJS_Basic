"use client";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import CreateModal from "./create.modal";
import { useState } from "react";

interface IProps {
  blogs: IBlog[];
}

function AppTable(props: IProps) {
  const { blogs } = props;
  console.log(">>>> Check props blogs :", blogs);

  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
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
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((blog) => {
            return (
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>
                  <ButtonGroup vertical>
                    <Button variant="success" className="my-3">
                      View
                    </Button>
                    <Button variant="warning" className="my-3">
                      Edit
                    </Button>
                    <Button variant="danger" className="my-3">
                      delete
                    </Button>
                  </ButtonGroup>
                </td>
                <td>{blog.content}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <CreateModal
        showModalCreate={showModalCreate}
        setShowModalCreate={setShowModalCreate}
      />
    </>
  );
}

export default AppTable;
