import { Button, Form, Modal } from "react-bootstrap";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import ReactPaginate from "react-paginate";
import DataTable from "../DataTable";
import { useLocation } from "react-router-dom";

export default function Donate() {
  const [input, setInput] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState("");
  const [userList] = useCollection(
    db.collection("users").orderBy("timestamp", "desc")
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("users").add({
      input: input,
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: address,
      phoneNumber: phoneNumber,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setShowModal(true);
  };
  const closeRegistration = () => {
    setShowModal("");
    setInput(null);
    setFirstName("");
    setLastName("");
    setEmail("");
    setAddress("");
    setPhoneNumber("");
  };

  return (
    <>
      <NavigationBar />
      <div className="donate-bg">
        <div className="d-flex justify-content-center align-items-center">
          <div className="row w-100">
            <div className="col-md donate-form">
              <Form className="bg-light p-5 m-5" onSubmit={handleSubmit}>
                <div className="py-3">
                  <h2 className="mb-5">SAVE A LIFE: DONATE TODAY</h2>
                  <p className="lead fw-bold">
                    Vulnerable children need you more than ever.
                  </p>
                  <p className="text-muted">
                    Right now, children are living through a global pandemic
                    against the backdrop of poverty, conflict and natural
                    disasters. Your gift today can help make change that
                    protects the lives of children, families and their
                    communities.
                  </p>
                  <p className="lead fw-bold">
                    Join us today and make change for children.
                  </p>
                </div>
                <hr />

                <h3 className="py-3">Billing information</h3>
                <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Label>Enter the amount:</Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    placeholder="$0.00"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  ></Form.Control>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    placeholder="Enter Your First Name"
                    autoComplete="firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    First Name already exist.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    placeholder="Enter Your Last Name"
                    autoComplete="lastname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Last Name already exist.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="su-formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    size="sm"
                    placeholder="Enter Your Email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    email already exist.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="su-formAddress">
                  <Form.Label>Complete Address</Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    placeholder="Enter Your Complete Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="su-formNumber">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    type="number"
                    size="sm"
                    placeholder="Enter Your Phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Form.Group>

                <div className="form-row">
                  <div className="col-lg-10">
                    <Modal show={showModal}>
                      <Modal.Header>
                        <Modal.Title className="text-dark">
                          Thank you for your donation
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="text-dark">
                        You have been added from our community
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={() => closeRegistration()}
                        >
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>

                    <Button
                      variant="info"
                      type="submit"
                      className="btn btn-warning w-100"
                    >
                      DONATE NOW
                    </Button>
                    <hr />
                  </div>
                </div>

                <div className="form-row">
                  <h2>Payment information</h2>
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src="https://serious-studio.com/wp-content/uploads/01-1.png"
                      className="img-fluid w-25 h-25 btn"
                      alt="gcash"
                    />

                    <img
                      src="https://www.theorchardcottage.co.nz/wp-content/uploads/2018/09/visa-and-mastercard-logos-logo-visa-png-logo-visa-mastercard-png-visa-logo-white-png-awesome-logos.png"
                      className="img-fluid w-25 h-25 btn"
                      alt="visa"
                    />
                    <img
                      src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
                      className="img-fluid w-25 h-25 btn"
                      alt="pay"
                    />
                  </div>
                </div>
              </Form>
            </div>
            <div className="col-md ">
              <div class="card h-50 w-100 donate">
                <div class="card-header list-group-item list-group-item-primary">
                  Featured
                </div>
                <div class="card-body bg-warning">
                  {userList?.docs.map((user) => (
                    <DataTable
                      key={user.id}
                      input={user.data().input}
                      firstName={user.data().firstName}
                      lastName={user.data().lastName}
                      email={user.data().email}
                      address={user.data().address}
                      phoneNumber={user.data().phoneNumber}
                      timestamp={user.data().timestamp}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
