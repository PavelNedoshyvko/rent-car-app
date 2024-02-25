import { useModal } from "../../hooks/useModal";
import {
  Icon,
  ParamsWrap,
  Price,
  Title,
  TitleAccent,
  TitleWrap,
} from "../Card/Card.styled";
import { CardModal } from "../CardModal/CardModal";
import { Button } from "../UI/Button/Button";
import { Image, ImageWrap } from "./Card.styled";
import icons from "../../data/icons.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/favoriteSlice";
import { selectFavorite } from "../../redux/advertsSelectors";

export const Card = ({ advert }) => {
  const dispatch = useDispatch();
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

  const favorites = useSelector(selectFavorite);

  const isFavorite = favorites.some((favorite) => favorite.id === advert.id);

  const [clicked, setClicked] = useState(isFavorite);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      dispatch(toggleFavorite(JSON.parse(storedFavorites)));
    }
  }, [dispatch]);

  const handleClick = () => {
    setClicked((prevClicked) => !prevClicked);
    dispatch(toggleFavorite(advert));
  };

  return (
    <div>
      <Icon>
        <use href={icons + "#icon-heart"} />
      </Icon>
      <ImageWrap>
        <Image src={img || photoLink} alt={`${make}, ${model}`} />
        <Icon $clicked={clicked} onClick={handleClick}>
          <use href={icons + "#icon-heart"} />
        </Icon>
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
