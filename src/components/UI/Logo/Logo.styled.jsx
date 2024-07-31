import styled from "styled-components";

export const LogoWrap = styled.div`
  position: relative;
  width: 150px;
  height: 50px;
`;

export const Car = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  transform: translateX(-50%);
  z-index: 2;
`;

export const Wheel = styled.div`
  position: absolute;
  display: flex;
  top: 24px;
  right: 135px;
  width: 118px;
  justify-content: space-between;
  left: 52%;
  bottom: 105px;
  transform: translateX(-50%);
  z-index: 2;

  img {
    width: 25px;
    height: 25px;
  }
`;
