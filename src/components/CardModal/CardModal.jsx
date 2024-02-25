import { Modal } from "../UI/Modal/Modal";
import {
  AccessoriesTitle,
  AccessoriesWrap,
  CloseModalBtn,
  ConditionsTitle,
  ConditionsWrap,
  Description,
  Image,
  ImageWrap,
  ParamsWrap,
  Price,
  RentalLink,
  Title,
  TitleAccent,
  TitleWrap,
} from "./CardModal.styled";

export const CardModal = ({ modalIsOpen, closeModal, data }) => {
  const {
    id,
    img,
    photoLink,
    make,
    model,
    year,
    rentalPrice,
    address,
    type,
    accessories,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    rentalConditions,
    mileage,
  } = data;

  const mainAddress = address.split(", ");
  const city = mainAddress[1];
  const country = mainAddress[2];

  const conditions = rentalConditions.split("\n");

  const formattedMileage = mileage.toString().replace(/^(\d)(\d+)/, "$1,$2");

  let formattedRentalPrice = rentalPrice.slice(1) + rentalPrice[0];

  return (
    <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
      <ImageWrap>
        <Image src={img || photoLink} alt={`${make}, ${model}`} />
      </ImageWrap>
      <TitleWrap>
        <Title>
          {make} <TitleAccent>{model}</TitleAccent>, {year}
        </Title>
        <Price>{rentalPrice}</Price>
      </TitleWrap>
      <ParamsWrap>
        <li>{city}</li>
        <li>{country}</li>
        <li>Id: {id}</li>
        <li>Year: {year}</li>
        <li>Type: {type}</li>
        <li>Fuel Consumption: {fuelConsumption}</li>
        <li>Engine Size: {engineSize}</li>
      </ParamsWrap>
      <Description>{description}</Description>

      <AccessoriesTitle>Accessories and functionalities:</AccessoriesTitle>
      <AccessoriesWrap>
        {accessories.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
        {functionalities.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </AccessoriesWrap>

      <ConditionsTitle>Rental Conditions:</ConditionsTitle>
      <ConditionsWrap>
        {conditions.map((item, idx) => (
          <li key={idx}>
            {idx === 0 ? `${item.split(":")[0]}:` : item.split(":")[0]}
            <span>{item.split(":").slice(1).join(":")}</span>
          </li>
        ))}

        <li>
          Mileage: <span>{formattedMileage}</span>
        </li>
        <li>
          Price: <span>{formattedRentalPrice}</span>
        </li>
      </ConditionsWrap>
      <RentalLink href="tel:+380730000000">Rental car</RentalLink>
      <CloseModalBtn onClick={closeModal}>✕</CloseModalBtn>
    </Modal>
  );
};
