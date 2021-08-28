import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function EditItemModal(props: { itemProps }) {
  const itemProps = props.itemProps;
  // Modal Set up
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const showModal = () => setShow(true);

  // Form variables
  const [name, setName] = useState<string>(itemProps.name);
  const [price, setPrice] = useState<number>(itemProps.price);
  const [description, setDesc] = useState<string>(itemProps.description);
  const [img, setImg] = useState<string>(itemProps.image);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = { name, price, description, img };
    itemProps.editFunction(itemProps.id, formData)
    closeModal();
    return;
  }

  return (
    <div>
      <Button variant="primary" onClick={showModal}>
        Edit
      </Button>

      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                value={price}
                onChange={(e) => setPrice(parseInt(e.target.value))}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Img</Form.Label>
              <Form.Control
                type="text"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">Save Changes</Button>
            <Button variant="secondary" onClick={closeModal}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default EditItemModal;
