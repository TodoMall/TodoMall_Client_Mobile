import { useEffect, useState } from "react";
import styled from "styled-components";

import { CheckIcon } from "../../../mds/icon";

const AgreementButtonItem = ({
    children = null,
    isAgreed = false,
    onClick = () => {},
    width = "100%",
}) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setIsChecked(isAgreed);
    }, [isAgreed]);

    return (
        <ItemContainer width={width}>
            <ItemButton onClick={onClick}>
                <CheckIcon isChecked={isChecked} />
            </ItemButton>
            {children}
        </ItemContainer>
    );
};

export default AgreementButtonItem;

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: ${props => props.width};
    height: 1.5rem;
`;

const ItemButton = styled.button`
    background-color: transparent;
    border: none;
    margin: 1.125rem 0.5rem 1.125rem 0.5rem;
`;
