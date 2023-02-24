import styled from "styled-components";

import { COLOR, GNB } from "../../constants";
import { MyPageIcon } from "../icon";

const MyPageButton = ({
    isCurrent = false,
    onClick: handleClick = () => {},
}) => {
    const SelectedItemColor =
        isCurrent === GNB.MYPAGE ? COLOR.GRAY800 : COLOR.GRAY200;

    return (
        <Container onClick={handleClick}>
            <MyPageIcon backgroundColor={SelectedItemColor} />
            <ButtonText fontColor={SelectedItemColor}>마이페이지</ButtonText>
        </Container>
    );
};
export default MyPageButton;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 0;
    background: rgba(255, 255, 255, 0.95);
`;

const ButtonText = styled.p`
    color: ${props => props.fontColor};
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1rem;
`;
