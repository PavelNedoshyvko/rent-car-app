import { Car, LogoWrap, Wheel } from "./Logo.styled";
import car from "/images/car.png";
import wheel from "/images/wheel.png";

export const Logo = () => {
  return (
    <LogoWrap>
      <Car>
        <img src={car} alt="Car" />
        <Wheel>
          <img src={wheel} alt="Wheel" />
          <img src={wheel} alt="Wheel" />
        </Wheel>
      </Car>
    </LogoWrap>
  );
};
