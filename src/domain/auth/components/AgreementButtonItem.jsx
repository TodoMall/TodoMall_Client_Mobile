import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR } from "../../../constants";
import { NextArrowButton } from "../../../mds/button";
import { CheckIcon } from "../../../mds/icon";

const AgreementButtonItem = ({
    children = null,
    isAgreed = false,
    onClick: handleClick = () => {},
    width = "100%",
    detail = null,
}) => {
    const [isChecked, setIsChecked] = useState(false);
    const navigator = useNavigate();

    useEffect(() => {
        setIsChecked(isAgreed);
    }, [isAgreed]);

    return (
        <ItemContainer width={width} onClick={handleClick}>
            <ItemButtonContainer>
                <ItemButton>
                    <CheckIcon isChecked={isChecked} />
                </ItemButton>
                {children}
            </ItemButtonContainer>
            {detail && (
                <NextArrowButton
                    onClick={() => navigator(detail)}
                    color={COLOR.GRAY800}
                />
            )}
        </ItemContainer>
    );
};

export default AgreementButtonItem;

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: ${props => props.width};
    height: 1.5rem;
    padding: 0 0.5rem 0 0.5rem;
`;

const ItemButtonContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

const ItemButton = styled.button`
    background-color: transparent;
    border: none;
    margin: 1.125rem 0.5rem 1.125rem 0.5rem;
`;
