import styled from "styled-components";

import { COLOR, FONT_STYLE } from "../../constants";

const CategoryItem = ({
    title,
    isSelected = false,
    onClick: handleClick = () => {},
}) => {
    return (
        <Container isSelected={isSelected} onClick={handleClick}>
            <p>{title}</p>
        </Container>
    );
};

export default CategoryItem;

const Container = styled.div`
    width: 5.25rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${COLOR.GRAY100};
    padding: 0.5rem 0.75rem 0 0.5rem;
    p {
        position: relative;
        top: 4px;
        white-space: nowrap;
        font-weight: ${FONT_STYLE.PRETENDARD_225.WEIGTHT};
        font-size: ${FONT_STYLE.PRETENDARD_225.SIZE};
        line-height: ${FONT_STYLE.PRETENDARD_225.HEIGHT};
        letter-spacing: ${FONT_STYLE.PRETENDARD_225.LETTER_SPACING};
        color: ${props =>
            props.isSelected ? COLOR.BRAND_COLOR : COLOR.GRAY500};
        border-bottom: 1px solid
            ${props => (props.isSelected ? COLOR.BRAND_COLOR : "none")};
    }
`;
