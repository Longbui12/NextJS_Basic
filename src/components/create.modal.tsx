"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

interface IProps {
  showModalCreate: boolean;
  setShowModalCreate: (value: boolean) => void;
}

function CreateModal(props: IProps) {
  const { showModalCreate, setShowModalCreate } = props;
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = () => {
    if (!title) {
      toast.error("Not empty title !");
      return;
    }
    if (!author) {
      toast.error("Not empty author !");
      return;
    }
    if (!content) {
      toast.error("Not empty content !");
      return;
    }
    // if (!title || !author || !content) {
    //   toast.error(
    //     "You have entered missing information in one of the boxes below, please check again !"
    //   );
    //   return;
    // }

    fetch("http://localhost:8008/blogs", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author, content }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          toast.success("Create new a blog succeed !...");
          handleCloseModal();
        } else {
          toast.error("Create failed !...");
        }
      });
    // toast.success("Create succeed !...");
    // console.log("CHeck data :", title, author, content);
  };

  // This funtion to when close Modal will clear data :
  const handleCloseModal = () => {
    setTitle(""), setAuthor(""), setContent(""), setShowModalCreate(false);
  };
  return (
    <>
      <Modal
        show={showModalCreate}
        onHide={() => handleCloseModal()}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New A Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="..."
                value={content}
                onChange={(event) => setContent(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateModal;
