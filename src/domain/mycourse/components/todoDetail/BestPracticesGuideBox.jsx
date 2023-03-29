import styled from "styled-components";

import { COLOR } from "../../../../constants/color";
import { RowBox } from "../../../../mds/box";
import { BasicButton } from "../../../../mds/button";
import { SessionBasicIcon } from "../../../../mds/icon";
import { BodyL, BodyM, BodyXL, HeadingXL } from "../../../../mds/text";

const BestPracticesGuideBox = ({ todo, onClick: handleClick = () => {} }) => {
    return (
        <Container>
            <RowBox justifyContent="flex-start">
                <SessionBasicIcon color={COLOR.SUCCESS500} />
                <BodyL margin={"0 0 0 0.25rem"} fontColor={COLOR.SUCCESS500}>
                    도움말
                </BodyL>
            </RowBox>
            <HeadingXL>{todo?.title}</HeadingXL>
            <BodyM>지금까지의 과정을 잘 따랐는지 알고싶다면?</BodyM>
            <ButtonWrapper>
                <BasicButton
                    width={"51%"}
                    onClick={handleClick}
                    backgroundColor={COLOR.SUCCESS500}
                >
                    <BodyXL fontColor={COLOR.WHITE}>모범예시 보러가기</BodyXL>
                </BasicButton>
            </ButtonWrapper>
        </Container>
    );
};
export default BestPracticesGuideBox;
const Container = styled.div`
    margin: 2rem 0;
    padding: 1rem 1.25rem;
    border-radius: 1.25rem;
    background-color: ${COLOR.GRAY50};
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;
