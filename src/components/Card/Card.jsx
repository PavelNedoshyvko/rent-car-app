import { useModal } from "../../hooks/useModal";
import {
  ParamsWrap,
  Price,
  Title,
  TitleAccent,
  TitleWrap,
} from "../Card/Card.styled";
import { CardModal } from "../CardModal/CardModal";
import { Button } from "../UI/Button/Button";
import { Image, ImageWrap } from "./Card.styled";

export const Card = ({ advert }) => {
  const {
    id,
    img,
    photoLink,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    accessories,
  } = advert;

  const { isModalOpen, openModal, closeModal } = useModal();

  const mainAddress = address.split(", ");
  const city = mainAddress[1];
  const country = mainAddress[2];

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = "16px Manrope";
  const text = `${make} ${model}`;
  const textWidth = context.measureText(text).width;

  return (
    <div>
      <ImageWrap>
        <Image src={img || photoLink} alt={`${make}, ${model}`} />
      </ImageWrap>
      <TitleWrap>
        <Title>
          {textWidth > 185 ? (
            `${make}, ${year}`
          ) : (
            <>
              {make} <TitleAccent>{model}</TitleAccent>, {year}
            </>
          )}
        </Title>
        <Price>{rentalPrice}</Price>
      </TitleWrap>
      <ParamsWrap>
        <span>{city}</span>
        <span>{country}</span>
        <span>{rentalCompany}</span>
        <span>{type}</span>
        <span>{make}</span>
        <span>{id}</span>
        <span>{accessories[2]}</span>
      </ParamsWrap>

      <Button
        type={"button"}
        title={"Learn more"}
        width={"100%"}
        height={"44px"}
        onClick={openModal}
      />

      <CardModal
        data={advert}
        modalIsOpen={isModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
};
