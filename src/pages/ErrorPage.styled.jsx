import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${window.innerHeight}px;
  background-color: #dcdcdc;
`;

export const Image = styled.img`
  margin-top: 185px;
`;

export const MainText = styled.h2`
  font-family: Poppins;
  font-size: 26px;
  font-weight: 700;
  line-height: 41px;
  letter-spacing: 10%;
  text-align: left;
  margin-top: 50px;
  @media (min-width: 768px) {
    font-size: 46px;
    line-height: 61px;
    letter-spacing: 12%;
  }

  @media (min-width: 1440px) {
    font-size: 64px;
    line-height: 81px;
    letter-spacing: 14%;
  }
`;

export const SecondaryText = styled.p`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0%;
  text-align: left;
  margin-top: 10px;
  @media (min-width: 768px) {
    font-size: 24px;
    margin-top: 24px;
  }

  @media (min-width: 1440px) {
    font-size: 30px;
    margin-top: 32px;
  }
`;

export const HomeLink = styled(Link)`
  text-decoration: underline;
  color: #008b8b;
`;

export const TimerText = styled.p`
  font-family: Poppins;
  font-size: 11px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0%;
  text-align: left;
  margin-top: 6px;
  @media (min-width: 768px) {
    font-size: 16px;
    margin-top: 15px;
  }

  @media (min-width: 1440px) {
    font-size: 15px;
    margin-top: 20px;
  }
`;

export const Timer = styled.span`
  text-decoration: underline;
  color: #8b0000;
`;
