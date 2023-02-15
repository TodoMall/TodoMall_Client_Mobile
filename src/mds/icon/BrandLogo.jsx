import { COLOR } from "../../constants";
import styled from "styled-components";

const BrandLogo = () => {
  return (
    <Container>
      <svg
        width="192"
        height="32"
        viewBox="0 0 192 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 3H25.623V28.5L5 3Z" fill={COLOR.BRAND_COLOR} />
        <path
          d="M38.1533 28.06C45.0734 28.06 50.6833 22.4501 50.6833 15.53C50.6833 8.60987 45.0734 3 38.1533 3C31.2332 3 25.6233 8.60987 25.6233 15.53C25.6233 22.4501 31.2332 28.06 38.1533 28.06Z"
          fill={COLOR.BRAND_COLOR}
        />
        <path
          d="M85.7173 28.06C92.6374 28.06 98.2473 22.4501 98.2473 15.53C98.2473 8.60987 92.6374 3 85.7173 3C78.7971 3 73.1873 8.60987 73.1873 15.53C73.1873 22.4501 78.7971 28.06 85.7173 28.06Z"
          fill={COLOR.BRAND_COLOR}
        />
        <path
          d="M60.6569 28.06C67.5786 28.06 73.1869 22.4517 73.1869 15.53C73.1869 8.60833 67.5786 3 60.6569 3H50.7891V28.06H60.6569Z"
          fill={COLOR.BRAND_COLOR}
        />
        <path
          d="M140.81 28.06H110V6.08813L119.619 12.2289L140.81 3V28.06Z"
          fill={COLOR.BRAND_COLOR}
        />
        <path
          d="M153.34 28.06C146.418 28.06 140.81 22.4517 140.81 15.53C140.81 8.60833 146.418 3 153.34 3C160.262 3 165.87 8.60833 165.87 15.53V28.06H153.34Z"
          fill={COLOR.BRAND_COLOR}
        />
        <path d="M176 3H168V28H176V3Z" fill={COLOR.BRAND_COLOR} />
        <path d="M186 3H178V28H186V3Z" fill={COLOR.BRAND_COLOR} />
      </svg>
    </Container>
  );
};
export default BrandLogo;
const Container = styled.div``;
