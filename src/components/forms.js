import { useState } from "react";

import { ResetBtn } from "../components/buttons";
import { FilterBtn } from "../components/buttons";

import { LoginBtn } from "../components/buttons";

export const OrganizationForm = () => {
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
          <div className="col-lg-6 col-md-8 col-sm-12 d-flex align-items-center justify-content-center">
            <form>
              <div class="mb-3">
                <label for="organization" class="form-label">
                  Organization
                </label>
                <select id="" class="form-select">
                  <option>Select</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="username" class="form-label">
                  Username
                </label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="User"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="Phone Number" class="form-label">
                  Phone Number
                </label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="status" class="form-label">
                  Status
                </label>
                <select id="" class="form-select">
                  <option>Select</option>
                </select>
              </div>
              <div className="">
                <ResetBtn className="px-2" />
                <FilterBtn className="px-2" />
              </div>
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
