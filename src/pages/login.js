import { useState } from "react";

//images
import lendsqr from "../assets/images/lendsqr.png";
import pablosignin from "../assets/images/pablosignin.png";

import { LoginBtn } from "../components/buttons";

export const LoginForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const [userdetails, setUserDetails] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // setUser({ ...user });
    setUser({ ...user, [name]: value });
    console.log(name, value);
  };
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex align-items-center">
          <div
            className="col-lg-6 col-md-4 col-sm-12 d-flex justify-content-center"
            // style={{ height: "660px" }}
          >
            <div style={{ width: "18rem" }}>
              <img variant="top" src={lendsqr} maxwidth="10%" maxheight="10%" />
              <img variant="top" src={pablosignin} className="" />
              <div className="text-center card-body">
                <div className="my-4"></div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-8 col-sm-12 d-flex align-items-center justify-content-center"
            // style={{ height: "660px" }}
          >
            <form>
              <div class="mb-3">
                <h1>Welcome!</h1>
                <p>Enter details to login.</p>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  id="exampleInputPassword1"
                />
              </div>
              <p> FORGOT PASSWORD?</p>
              <LoginBtn />
            </form>
            {/* <Form onSubmit={handleSubmit} noValidate validated={validated}>
              <h3 className="text-center my-4">CREATE ACCOUNT </h3>
              <Form.Group
                className="mb-3 formFieldWidth"
                controlId="firstName"
        
              >
                <Form.Control
                  required
                  type="name"
                  placeholder="First Name"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid first name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3 formFieldWidth"
                controlId="lastName"
             
              >
                <Form.Control
                  required
                  type="name"
                  placeholder="Last Name"
                  name="lastName"
                  value={user.lastName}
                
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid last name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3 formFieldWidth"
                controlId="password"
           
              >
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Password must be at least 8 char long, consisting of at least
                  one upper case, numbers, and special characters
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3 formFieldWidth"
                controlId="confirmPassword"
          
              >
                <Form.Control
                  required
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={user.confirmPassword}
             
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Password does not match
                </Form.Control.Feedback>
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" type="submit">
                  Create Account
                </Button>
              </div>
            </Form> */}
          </div>
        </div>
      </div>
    </>
  );
};
