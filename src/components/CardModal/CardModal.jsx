import { Modal } from "../UI/Modal/Modal";
import {
  AccessoriesTitle,
  AccessoriesWrap,
  CloseModalBtn,
  ConditionsTitle,
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
        <span>{city}</span>
        <span>{country}</span>
        <span>Id: {id}</span>
        <span>Year: {year}</span>
        <span>Type: {type}</span>
        <span>Fuel Consumption: {fuelConsumption}</span>
        <span>Engine Size: {engineSize}</span>
      </ParamsWrap>
      <Description>{description}</Description>

      <AccessoriesTitle>Accessories and functionalities:</AccessoriesTitle>
      <AccessoriesWrap>
        {accessories.map((item, idx) => (
          <span key={idx}>{item}</span>
        ))}
        {functionalities.map((item, idx) => (
          <span key={idx}>{item}</span>
        ))}
      </AccessoriesWrap>

      <ConditionsTitle>Rental Conditions:</ConditionsTitle>
      <ul>
        {conditions.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
        <li>Mileage: {formattedMileage}</li>
        <li>Price: {formattedRentalPrice}</li>
      </ul>
      <RentalLink href="tel:+380730000000">Rental car</RentalLink>
      <CloseModalBtn onClick={closeModal}>✕</CloseModalBtn>
    </Modal>
  );
};
