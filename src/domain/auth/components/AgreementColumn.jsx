import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR } from "../../../constants";
import { NextArrowButton } from "../../../mds/button";
import { CheckIcon } from "../../../mds/icon";
import { BodyL } from "../../../mds/text";

const AgreementColumn = ({
    children = null,
    isAgreed = false,
    onClick: handleClick = () => {},
    detail = null,
    isRequired = false,
}) => {
    const [isChecked, setIsChecked] = useState(false);
    const navigator = useNavigate();

    useEffect(() => {
        setIsChecked(isAgreed);
    }, [isAgreed]);

    return (
        <ItemContainer onClick={handleClick}>
            <ItemButtonContainer>
                <ItemButton>
                    <CheckIcon isChecked={isChecked} />
                </ItemButton>
                <BodyL fontColor={isRequired ? undefined : COLOR.GRAY500}>
                    ({isRequired ? "필수" : "선택"})
                </BodyL>
                <BodyL>&nbsp; {children}</BodyL>
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

export default AgreementColumn;

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
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
