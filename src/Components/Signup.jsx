import React from "react";
import { Link } from "react-router-dom";
import logo from "../unnamed.png";
import "../css/login.css";

const Signup = () => {
  return (

    <body>
    <div id="signup">
        <div class="form_box">
          {/* <h3>Login</h3> */}
          <div class="icon_img">
            <img src={logo} alt=""></img>
            <p>Salt Ecosystem</p>
          </div>

          <form>
            <div class="form-group">
              <input
                type="name"
                class="form-control"
                placeholder="First Name"
              />
            </div>
            <div class="form-group">
              <input type="name" class="form-control" placeholder="Last Name" />
            </div>

            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>

            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              ></input>

              <label class="form-check-label" for="exampleCheck1">
                <span>
                  You are agreed with our{" "}
                  <Link to="/#">Terms & Conditions </Link>
                </span>
              </label>
            </div>

            <button type="submit" class="btn btn-primary">
              GET OTP
            </button>
            <small className="notify">Please check your email</small>
            <div class="form-group getOTP">
              <input type="Text" class="form-control " placeholder="Enter OTP" />
              <button class="btn btn-primary" type="submit"><i class="fas fa-angle-right"></i></button>
            </div>
          </form>
        </div>
    </div>
    </body>
  );
};

export default Signup;
