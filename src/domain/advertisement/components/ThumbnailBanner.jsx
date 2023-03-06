import styled from "styled-components";

const ThumbnailBanner = ({ src, alt = "", pathTitle }) => {
    // TODO : 기획 최종 픽스 나면 구현 예정
    return <Thumbnail src={src} alt={alt} />;
};
export default ThumbnailBanner;
const Thumbnail = styled.img`
    width: 100%;
`;
