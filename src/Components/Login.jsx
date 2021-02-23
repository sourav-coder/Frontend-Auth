import React from "react";
import { Link } from "react-router-dom";
import logo from "../unnamed.png";
import "../css/login.css";

const Login = () => {
  return (
    <body>
      
    <div id="signup">
        <div class="form_box">
          <div class="icon_img">
            <img src={logo} alt=""></img>
            <p>Salt Ecosystem</p>

          </div>

          <form>



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

            <button type="submit" class="btn  btn-primary btn-block">
              SUBMIT
            </button>






          </form>
        </div>
      
    </div>
    </body>
  );
};

export default Login;
