import styled from "styled-components";

export const MainWarper = styled.div`
  @media (min-width: 1024px) {
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-wrap: wrap;
    font-family: ibm plex sans, sans-serif;
  }
`;

export const LeftSideContainer = styled.div`
  @media screen and (min-width: 1024px) {
    display: block;
    width: 50%;
    height: 100%;
    position: fixed;
  }
  display: none;
`;

export const LeftSideImgContainer = styled.div`
  height: 100%;
  align-items: center;
  position: relative;
`;

export const LeftSideImg = styled.img`
  height: 100%;
  width: 100%;
`;

export const LeftSideHeading = styled.h1`
  font-weight: 700;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 100px;
`;

export const RightSideContainer = styled.div`
  @media (min-width: 1024px) {
    height: 100%;
    width: 50%;
    position: absolute;
    left: 50%;
    padding-top: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RightSideLog = styled.img`
  height: 80px;
  width: 250px;
  cursor: pointer;
`;

export const RightLoginContain = styled.div`
  @media (min-width: 1024px) {
    min-height: 600px;
  }
`;

export const LoginHeading = styled.h1`
  text-align: center;
  font-weight: 600px;
  font-size: 1.125rem;
  color: #f7931d;
  padding-top: 3rem;
  margin-top: 20px;
  margin-bottom: 10px;
  padding-bottom: 1.5rem;
  font-family: inherit;
`;

export const LabelEl = styled.label`
  color: #869799;
  letter-spacing: 2px;
  font-weight: 700;
  font-size: 0.75rem;
  padding-bottom: 0.5rem;
`;

export const InputEl = styled.input`
  height: 35px;
  width: 300px;
  border-radius: 4px;
  color: #0e3033;
  border: 1px solid #cacaca;
  color: #0e3033;
  font-size: 16px;
`;

export const InputGroup = styled.div`
  margin-top: 10px;
  font-weight: 400;
`;

export const ButtonEl = styled.button`
  margin-top: 40px;
  margin-bottom: 40px;
  height: 35px;
  width: 200px;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  background-color: #0e3033;
  outline: 0;
  width: 300px;
`;

export const ForgotPass = styled.p`
  color: #0e3033;
  text-align: center;
  cursor: pointer;
`;

export const LineWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.p`
  border-top: 1px solid #e3e3e3;
  background-color: #e3e3e3;
  width: 150px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const EndPar = styled.div`
  line-height: 16px;
  font-size: 0.75rem;
  color: #0e3033;
  text-align: center;
  padding-bottom: 25px;
`;

export const FromEl = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
