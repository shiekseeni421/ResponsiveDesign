import React, { Component } from "react";

import {
  MainWarper,
  LeftSideContainer,
  LeftSideImg,
  LeftSideHeading,
  LeftSideImgContainer,
  RightSideContainer,
  RightSideLog,
  RightLoginContain,
  LoginHeading,
  LabelEl,
  InputEl,
  InputGroup,
  ButtonEl,
  ForgotPass,
  LineWrap,
  Line,
  EndPar,
  FromEl,
} from "../Styled/LoginPage.style";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFalse: null,
    };
  }

  render() {
    return (
      <div>
        <MainWarper>
          <LeftSideContainer>
            <LeftSideImgContainer>
              <LeftSideImg
                src="https://superlender-sandbox.crowde.co/static/media/bg-auth.20ca2072.png"
                alt="SideImg"
              />
              <LeftSideHeading>
                <span>We support farmers by revolutionizing</span>
                <br />
                <span>agriculture sector with technology</span>
              </LeftSideHeading>
            </LeftSideImgContainer>
          </LeftSideContainer>
          <RightSideContainer>
            <RightSideLog src="https://superlender-sandbox.crowde.co/static/media/crowde-logo.0a4bce5e.png" />
            <RightLoginContain>
              <LoginHeading>LOGIN</LoginHeading>
              <FromEl>
                <InputGroup>
                  <LabelEl htmlFor="Email">EMAIL ADDRESS*</LabelEl>
                  <br />
                  <InputEl
                    id="Email"
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                  />
                </InputGroup>
                <InputGroup>
                  <LabelEl htmlFor="password">PASSWORD*</LabelEl>
                  <br />
                  <InputEl
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    name="password"
                  />
                </InputGroup>
                <ButtonEl>Login</ButtonEl>
              </FromEl>

              <ForgotPass>Forgot password?</ForgotPass>
              <LineWrap>
                <Line></Line>
                Or
                <Line></Line>
              </LineWrap>
              <ForgotPass>Login As Admin</ForgotPass>
            </RightLoginContain>
            <EndPar>
              @ 2022 PT. CROWDE Membangun Bangsa. All rights reserved
            </EndPar>
          </RightSideContainer>
        </MainWarper>
      </div>
    );
  }
}

export default LoginPage;
