import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import NavHome from "../NavHome";
import NavLanding from "../NavLanding";
import Select from "react-select";
import Footer from "../Footer";

const Donate = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState(null);

  const options = [
    { value: 100, label: "₱100.00" },
    { value: 250, label: "₱250.00" },
    { value: 500, label: "₱500.00" },
    { value: 1000, label: "₱1000.00" },
    { value: 2000, label: "₱2000.00" },
    { value: 3000, label: "₱3000.00" },
  ];
  const navigate = useNavigate();

  const dataCollection = collection(db, "users");

  const [user] = useAuthState(auth);
  const activeUser = useSelector((state) => state.activeUser);

  const checkIfActive = () => {
    let isActive = false;
    if (user || activeUser.email) {
      isActive = true;
    } else {
      console.log("no user active");
    }

    return isActive;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(dataCollection, {
      amount: amount,
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: address,
      phoneNumber: phoneNumber,
    });
    navigate("/show");
    //console.log(e.target[0].value)
  };

  return (
    <>
      <div className="donate-bg">
        {checkIfActive() ? <NavHome /> : <NavLanding />}

        <div className="d-flex justify-content-center align-items-center">
          <div className="row w-100">
            <div className="col-md donate-form">
              <Form className="bg-light p-5 m-5" onSubmit={handleSubmit}>
                <div className="py-5 my-2">
                  <div className="d-flex justify-content-start align-items-center">
                    <img
                      src={"images/site-icon-dark.png"}
                      alt="Site Icon"
                      className="py-3"
                    />
                    <span className="h2 text-center">
                      SAVE A LIFE: DONATE TODAY
                    </span>
                  </div>
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

                  <Select
                    className="py-2"
                    defaultValue={amount}
                    onChange={setAmount}
                    options={options}
                  />

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
                <Button className="btn btn-warning" type="submit">
                  Donate now
                </Button>

                <div className="form-row">
                  <h2>Payment information</h2>
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src="https://www.theorchardcottage.co.nz/wp-content/uploads/2018/09/visa-and-mastercard-logos-logo-visa-png-logo-visa-mastercard-png-visa-logo-white-png-awesome-logos.png"
                      className="img-fluid w-25 h-25"
                      alt="visa"
                    />
                    <img
                      src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
                      className="img-fluid w-25 h-25"
                      alt="pay"
                    />
                  </div>
                </div>
              </Form>
            </div>
            <div className="col-md "></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Donate;
