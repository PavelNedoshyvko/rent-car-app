import { StyledButton } from "./Button.styled";

export const Button = ({ type, title, width, height, onClick }) => {
  return (
    <StyledButton type={type} $width={width} $height={height} onClick={onClick}>
      {title}
    </StyledButton>
  );
};
