import { useSelector } from "react-redux";
import { selectVisibleAdverts } from "../../redux/advertsSelectors";
import { Card } from "../Card/Card";
import { GalleryItem, GalleryList } from "./Gallery.styled";

export const Gallery = () => {
  const visibleAdverts = useSelector(selectVisibleAdverts);

  return (
    <GalleryList>
      {visibleAdverts.map((advert) => (
        <GalleryItem key={advert.id}>
          <Card advert={advert} />
        </GalleryItem>
      ))}
    </GalleryList>
  );
};
