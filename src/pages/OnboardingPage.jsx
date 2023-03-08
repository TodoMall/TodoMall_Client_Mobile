import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR, PATH } from "../constants";
import { OnboardingItem } from "../domain/member/components";
import { BasicButton } from "../mds/button";
import { BodyXL } from "../mds/text";

const OnboardingPage = () => {
    const [itemNumber, setItemNumber] = useState(0);
    const navigate = useNavigate();

    const onClickNextButton = () => {
        if (itemNumber < 2) {
            setItemNumber(itemNumber + 1);
            return;
        }
        navigate(PATH.SINGIN);
    };

    return (
        <Body>
            <ProgressBarContainer>
                <ProgressBar active={itemNumber === 0} />
                <ProgressBar active={itemNumber === 1} />
                <ProgressBar active={itemNumber === 2} />
            </ProgressBarContainer>
            <OnboardingItem itemNumber={itemNumber} />
            <BasicButton
                width="auto"
                backgroundColor={COLOR.WHITE}
                fontColor={COLOR.BRAND_COLOR}
                margin="4.875rem"
                onClick={onClickNextButton}
            >
                <BodyXL fontColor={COLOR.BRAND_COLOR}>
                    {itemNumber === 2 ? "시작하기" : "다음"}
                </BodyXL>
            </BasicButton>
        </Body>
    );
};

export default OnboardingPage;

const Body = styled.div`
    height: 100vh;
    width: 100%;
    animation: 0.5s ease-in-out 0s normal forwards 1 fadeIn;
    display: flex;
    flex-direction: column;
    align-items: center;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

const ProgressBarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 0.25rem;
    padding: 0 1rem;
`;

const ProgressBar = styled.div`
    width: calc(100% / 3.1);
    height: 0.125rem;
    margin-top: 3.25rem;
    background-color: ${COLOR.WHITE};
    opacity: ${props => (props.active ? 1 : 0.4)};
`;
