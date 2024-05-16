"use client";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";

interface IProps {
  blogs: IBlog[];
}

function AppTable(props: IProps) {
  const { blogs } = props;
  console.log(">>>> Check props blogs :", blogs);

  return (
    <Table striped bordered hover>
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
  );
}

export default AppTable;
