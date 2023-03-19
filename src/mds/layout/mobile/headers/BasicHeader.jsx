import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Divider from "../../../Divider";
import { ListButton, PreviousArrowButton } from "../../../button";
import { BodyXXL } from "../../../text";

const BasicHeader = ({
    pageDescription = null,
    hasPrevButton = true,
    hasListButton = false,
    height = "3.25rem",
    onClick: handleClick,
    onList: handleList = () => {},
}) => {
    const navigate = useNavigate();

    const handlePreviousPage = () => {
        if (typeof handleClick === "undefined") {
            navigate(-1);
        }
        if (typeof handleClick !== "undefined") {
            handleClick();
        }
    };

    return (
        <>
            <Container height={height}>
                {hasPrevButton ? (
                    <PreviousArrowButton onClick={handlePreviousPage} />
                ) : (
                    <EmptyBox />
                )}
                <BodyXXL textAlign={"center"}>{pageDescription}</BodyXXL>
                {hasListButton ? (
                    <ListButton onClick={handleList} />
                ) : (
                    <EmptyBox />
                )}
            </Container>
            <Divider />
        </>
    );
};

export default BasicHeader;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: ${props => props.height};
    padding: 0 0.5rem;
`;

const EmptyBox = styled.div`
    width: 2.5rem;
`;
