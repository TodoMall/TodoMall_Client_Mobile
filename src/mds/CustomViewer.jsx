import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
import styled from "styled-components";

import { COLOR } from "../constants";
import Loader from "./Loader";

const CustomViewer = ({ initialValue, isLoading }) => {
    return (
        <ViewerStyleContainer>
            {isLoading && <Loader />}
            {!isLoading && <Viewer initialValue={initialValue} />}
        </ViewerStyleContainer>
    );
};

export default CustomViewer;

const ViewerStyleContainer = styled.div`
    letter-spacing: -0.01rem;
    h1 {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 2rem;
        color: ${COLOR.GRAY900};
        border-bottom: none;
        margin: 0 0 0.5rem;
        padding-bottom: 0;
    }
    p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
        color: ${COLOR.GRAY900};
    }
    strong {
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.5rem;
        color: ${COLOR.GRAY900};
    }
    code {
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.375rem;
        border-radius: 0.25rem;
        color: ${COLOR.ERROR500};
        background: ${COLOR.GRAY100};
    }
    a {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
        color: ${COLOR.BRAND_COLOR};
    }
`;
