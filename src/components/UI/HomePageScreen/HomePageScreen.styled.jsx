import styled from "styled-components";
import sky from "/images/sky.jpg";
import road from "/images/road.jpg";
import city from "/images/city.png";

export const World = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-image: url(${sky});
  background-size: cover;
  overflow-x: hidden;
`;

export const Highway = styled.div`
  position: absolute;
  height: 200px;
  width: 500%;
  display: block;
  background-image: url(${road});
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-repeat: repeat-x;
  animation: highway 8000ms linear infinite;

  @keyframes highway {
    100% {
      transform: translateX(-3400px);
    }
  }
`;

export const City = styled.div`
  position: absolute;
  height: 250px;
  width: 500%;
  background-image: url(${city});
  left: 0;
  right: 0;
  bottom: 200px;
  display: block;
  z-index: 1;
  background-repeat: repeat-x;
  animation: city 20s linear infinite;

  @keyframes city {
    100% {
      transform: translateX(-1400px);
    }
  }
`;

export const Car = styled.div`
  position: absolute;
  width: 400px;
  left: 50%;
  bottom: 100px;
  transform: translateX(-50%);
  z-index: 2;

  img {
    width: 100%;
    animation: car 1s linear infinite;
  }

  @keyframes car {
    100% {
      transform: translateY(-1px);
    }
    50% {
      transform: translateY(1px);
    }
    0% {
      transform: translateY(-1px);
    }
  }
`;

export const Wheel = styled.div`
  position: absolute;
  display: flex;
  width: 310px;
  justify-content: space-between;
  left: 50.5%;
  bottom: 105px;
  transform: translateX(-50%);
  z-index: 2;

  img {
    width: 65px;
    height: 65px;
    animation: wheel 1000ms linear infinite;

    @keyframes wheel {
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export const Title = styled.h1`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 80px;
  z-index: 2;
  white-space: nowrap;
  text-transform: uppercase;
  color: #3470ff;
`;

export const ChooseCar = styled.h1`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 80px;
  z-index: 2;
  white-space: nowrap;
  text-transform: uppercase;
  color: #3470ff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #a0bdff;
  }
`;
