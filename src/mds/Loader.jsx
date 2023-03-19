import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";

const Loader = ({ height = "auto" }) => {
    return (
        <LoaderBox height={height}>
            <CircularProgress />
        </LoaderBox>
    );
};

export default Loader;

const LoaderBox = styled.div`
    width: 100%;
    height: ${props => props.height};
    display: flex;
    justify-content: center;
    align-items: center;
`;
