import { useSelector } from "react-redux";
import { selectFavorite } from "../redux/advertsSelectors";
import { Gallery } from "../components/Gallery/Gallery";
import { GalleryContainer } from "../components/UI/GalleryContainer/GalleryContainer.styled";
import { HeaderWrap } from "../components/Header/Header.styled";
import { PageLink } from "./FavoritePage.styled";
import { Link } from "react-router-dom";

const FavoritePage = () => {
  const favoriteAdverts = useSelector(selectFavorite);
  return (
    <>
      <HeaderWrap>
        <Link to={"/"}>
          <Logo />
        </Link>

        <PageLink to={"/"}>Home Page</PageLink>
        <PageLink to={"/catalog"}>Rent Page</PageLink>
      </HeaderWrap>

      <GalleryContainer>
        <Gallery visibleadverts={favoriteAdverts} />
      </GalleryContainer>
    </>
  );
};

export default FavoritePage;
