import { Card } from "../Card/Card";
import { GalleryItem, GalleryList } from "./Gallery.styled";

export const Gallery = ({ visibleadverts }) => {
  return (
    <GalleryList>
      {visibleadverts.map((advert) => (
        <GalleryItem key={advert.id}>
          <Card advert={advert} />
        </GalleryItem>
      ))}
    </GalleryList>
  );
};
