import styled from "styled-components";

export const LoadMoreBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 150px;
  border: none;
  background-color: transparent;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #3470ff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
