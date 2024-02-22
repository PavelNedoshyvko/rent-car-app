import { useSelector } from "react-redux";
import { selectAllAdverts } from "../../redux/advertsSelectors";
import { GalleryContainer } from "../UI/GalleryContainer/GalleryContainer.styled";
import { Card } from "../Card/Card";
import { GalleryItem, GalleryList } from "./Gallery.styled";

export const Gallery = () => {
  const adverts = useSelector(selectAllAdverts);

  return (
    <GalleryContainer>
      <GalleryList>
        {adverts.map((advert) => (
          <GalleryItem key={advert.id}>
            <Card advert={advert} />
          </GalleryItem>
        ))}
      </GalleryList>
    </GalleryContainer>
  );
};
