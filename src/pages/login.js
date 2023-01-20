import { useState } from "react";

//images
import lendsqr from "../assets/images/lendsqr.png";
import pablosignin from "../assets/images/pablosignin.png";

import { LoginBtn } from "../components/buttons";

export const LoginPage = () => {
  // const [user, setUser] = useState({
  //   firstName: "",
  //   lastName: "",
  //   password: "",
  //   confirmPassword: "",
  // });
  // const [userdetails, setUserDetails] = useState([]);

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   // setUser({ ...user });
  //   setUser({ ...user, [name]: value });
  //   console.log(name, value);
  // };
  // const [validated, setValidated] = useState(false);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   if (form.checkValidity() === false) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  return (
    <>
      <div className="container-fluid mx-auto">
        <div className="row d-flex justify-content-center p-5 m-5">
          <div
            className="col-lg-6 col-md-12 col-sm-12 "
            // style={{ height: "660px" }}
          >
            {/* <div> */}
            <img src={lendsqr} />
            <img src={pablosignin} className="" />
            {/* <div className="text-center card-body">
                <div className="my-4"></div>
              </div> */}
            {/* </div> */}
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12 d-flex "
            // style={{ height: "660px" }}
          >
            <form>
              <div class="mb-5 mt-3">
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
          </div>
        </div>
      </div>
    </>
  );
};
