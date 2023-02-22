import styled from "styled-components";

import { COLOR, FONT_STYLE } from "../../constants";

const CategoryItem = ({
    title,
    isSelected = false,
    fontColor = COLOR.GRAY500,
    onClick: handleClick = () => {},
}) => {
    return (
        <Container
            onClick={handleClick}
            isSelected={isSelected}
            fontColor={fontColor}
        >
            <p>{title}</p>
        </Container>
    );
};

export default CategoryItem;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0.75rem 0 0.5rem;
    cursor: pointer;
    p {
        white-space: nowrap;
        font-weight: ${FONT_STYLE.PRETENDARD_400.WEIGTHT};
        font-size: ${FONT_STYLE.PRETENDARD_400.SIZE};
        line-height: ${FONT_STYLE.PRETENDARD_400.HEIGHT};
        letter-spacing: -0.01em;
        color: ${props =>
            props.isSelected ? COLOR.BRAND_COLOR : props.fontColor};
        border-bottom: 0.063rem solid
            ${props => (props.isSelected ? COLOR.BRAND_COLOR : "none")};
    }
`;
