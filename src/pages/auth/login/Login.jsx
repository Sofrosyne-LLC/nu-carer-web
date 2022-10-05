import React from "react";
import { NavLink } from "react-router-dom";

// Styles
import {
  Left,
  Right,
  Wrapper,
  Content,
  Title,
  Overlay,
  Register,
  LogoIsh,
} from "./Login.Styles";

// widgets
import ButtonWidget from "../../../components/widgets/buttonWidget/ButtonWidget";
import Inputwidget from "../../../components/widgets/inputWidget/Inputwidget";

// left image
import bg from "../../../assets/images/login/login-side-img.png";

const Login = () => {
  return (
    <>
      <Wrapper>
        <Left bg={bg}>
          <Overlay>
            <LogoIsh>We Care</LogoIsh>
          </Overlay>
        </Left>
        <Right>
          <Content>
            <Title>Admin Login</Title>
            <Inputwidget
              type={"text"}
              placeholder={"e.g sereBlez"}
              label={"Enter username"}
            />
            <Inputwidget
              type={"text"}
              placeholder={"At least 8 characters"}
              label={"Password"}
            />
            <ButtonWidget text={"Login"} />
            <Register>
              Dont't have an account?
              <NavLink to="/register">Register</NavLink>
            </Register>
          </Content>
        </Right>
      </Wrapper>
    </>
  );
};

export default Login;
