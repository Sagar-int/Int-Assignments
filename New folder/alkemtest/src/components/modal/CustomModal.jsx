import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { DataContext } from "../../contexts/DataContext";
import { Depot } from "../depot/Depot";
import { Distributor } from "../distributor/Distributor";
import { Division } from "../division/Division";

export const CustomModal = ({ ChildForm }) => {
  const { show, child, handleClose } = useContext(DataContext);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        backdrop="static"
        keyboard={false}
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>{child}</Modal.Title>
        </Modal.Header> */}
        {/* <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eum voluptate error repellendus id ipsa! Cum maxime, magnam ipsum
          delectus incidunt mollitia amet. Deleniti aspernatur excepturi
          asperiores pariatur dolorem earum delectus.
        </Modal.Body> */}

        {child === "Select Distributor" ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{child}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Distributor />
            </Modal.Body>
          </>
        ) : child === "Select Division" ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{child}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Division />
            </Modal.Body>
          </>
        ) : child === "Select Depot" ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{child}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Depot />
            </Modal.Body>
          </>
        ) : null}

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
