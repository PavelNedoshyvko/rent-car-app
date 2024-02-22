import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  border-radius: 12px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: #fff;
  background-color: #3470ff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
