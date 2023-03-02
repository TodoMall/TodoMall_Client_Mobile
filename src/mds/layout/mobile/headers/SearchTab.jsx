import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR, FONT_STYLE, recommendTag } from "../../../../constants";
import { useInput } from "../../../../hooks";
import { PreviousArrowButton } from "../../../button";
import { BasicChip } from "../../../chip";
import { BodyL } from "../../../text";

const SearchTab = ({ onClose: handleClose = () => {} }) => {
    const navigate = useNavigate();
    const [keyword, handleKeywordChange] = useInput(null);

    const handleSearchPage = () => {
        navigate({
            pathname: "/search",
            search: `?keyword=${keyword}`,
        });
    };

    const handleEnterKeyPress = ({ key }) => {
        if (key === "Enter") {
            handleSearchPage();
        }
    };

    return (
        <Container>
            <InputContainer>
                <PreviousArrowButton onClick={handleClose} />
                <Input
                    placeholder="관심있는 싶은 툴을 검색해보세요."
                    onChange={handleKeywordChange}
                    onKeyUp={handleEnterKeyPress}
                />
            </InputContainer>
            <SearchResultContainer>
                <BodyL fontColor={COLOR.GRAY800}>추천 검색 키워드</BodyL>
                <SuggestedSearch>
                    {recommendTag.map(el => {
                        return (
                            <BasicChip
                                key={el.id}
                                title={el.title}
                                fontColor={COLOR.GRAY800}
                                width={"4rem"}
                            />
                        );
                    })}
                </SuggestedSearch>
            </SearchResultContainer>
        </Container>
    );
};

export default SearchTab;

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`;

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0 0.5rem;
`;

const SearchResultContainer = styled.div`
    width: 22.5rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    padding: 1.5rem;
    z-index: 1;
`;

const SuggestedSearch = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    all: unset;
    width: 100%;
    letter-spacing: -0.01em;
    font-weight: ${FONT_STYLE.PRETENDARD_225.WEIGTHT};
    font-size: ${FONT_STYLE.PRETENDARD_225.SIZE};
    line-height: ${FONT_STYLE.PRETENDARD_225.HEIGHT};

    margin-top: 2px;
    ::placeholder {
        text-align: left;
        letter-spacing: -0.01em;
        color: ${COLOR.GRAY300};
    }
`;
