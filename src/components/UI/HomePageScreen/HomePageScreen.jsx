import { Link } from "react-router-dom";
import {
  Car,
  ChooseCar,
  City,
  Highway,
  Title,
  Wheel,
  World,
} from "./HomePageScreen.styled";
import car from "/images/car.png";
import wheel from "/images/wheel.png";

export const HomePageScreen = () => {
  return (
    <>
      <World>
        <Title>Rent a car for any occasion</Title>

        <Highway />
        <City />
        <Link to={"/catalog"}>
          <ChooseCar>Choose your car here</ChooseCar>
          <Car>
            <img src={car} alt="Car" />
            <Wheel>
              <img src={wheel} alt="Wheel" />
              <img src={wheel} alt="Wheel" />
            </Wheel>
          </Car>
        </Link>
      </World>
    </>
  );
};
