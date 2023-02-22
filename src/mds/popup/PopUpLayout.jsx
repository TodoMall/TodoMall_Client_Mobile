import styled from "styled-components";

const PopUpLayout = ({ children, initialStatus = false }) => {
    return <PopupContainer>{children}</PopupContainer>;
};

export default PopUpLayout;

const PopupContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
`;
