import styled from "styled-components";
import { COLOR } from "../../constants";
const PopUpContentBox = ({ children }) => {
    return <Container>{children}</Container>;
};
export default PopUpContentBox;
const Container = styled.div`
    width: 18rem;
    height: 10.313rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLOR.WHITE};
    flex-direction: column;
    border-radius: 1.25rem;
    padding: 2rem 1rem;
`;
