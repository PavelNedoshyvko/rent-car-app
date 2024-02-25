import { useNavigate } from "react-router-dom";
import img from "/images/error.png";
import { useEffect, useState } from "react";
import { GalleryContainer } from "../components/UI/GalleryContainer/GalleryContainer.styled";
import {
  HomeLink,
  Image,
  MainText,
  SecondaryText,
  StyledContainer,
  Timer,
  TimerText,
} from "./ErrorPage.styled";

export default function ErrorPage() {
  const navigate = useNavigate();

  const [redirectTime, setRedirectTime] = useState(10);

  const intervalId = setInterval(() => {
    setRedirectTime(redirectTime - 1);
  }, 1000);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      navigate("/"), { replace: true };
    }, 10000);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <GalleryContainer>
        <StyledContainer>
          <Image src={img} alt="error" />
          <MainText>Sorry! This page not found :(</MainText>
          <SecondaryText>
            <HomeLink to={"/"}>Click here</HomeLink> for redirect to home page
          </SecondaryText>
          <TimerText>
            Or you will be automatically redirect in{" "}
            <Timer>{redirectTime}</Timer> seconds
          </TimerText>
        </StyledContainer>
      </GalleryContainer>
    </main>
  );
}
