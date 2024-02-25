import { RotatingLines } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderWrapper>
      {
        <RotatingLines
          strokeColor="#3470ff"
          strokeWidth="5"
          animationDuration="0.75"
          width="100"
          visible={true}
        />
      }
    </LoaderWrapper>
  );
};
