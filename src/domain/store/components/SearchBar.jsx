import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR, FONT_STYLE, PATH, recommendTag } from "../../../constants";
import { useInput } from "../../../hooks";
import { SearchButtonResource } from "../../../mds/button";
import { BasicChip } from "../../../mds/chip";
import { DetailS } from "../../../mds/text";

const SearchBar = () => {
    const navigate = useNavigate();
    const [keyword, handleKeywordChange] = useInput(null);
    const [isFocused, setIsFocused] = useState(false);
    const { SearchButton } = SearchButtonResource;

    const onFocus = () => setIsFocused(true);
    const onBlur = () => setIsFocused(false);

    const handleSearchPage = () => {
        navigate(PATH.SEARCH(keyword));
    };

    const handleEnterKeyPress = ({ key }) => {
        if (key === "Enter") {
            handleSearchPage();
        }
    };

    return (
        <Container>
            <InputContainer>
                <Input
                    onFocus={onFocus}
                    onBlur={onBlur}
                    placeholder="찾고 싶은 투두 클래스를 입력해주세요."
                    value={keyword}
                    onChange={handleKeywordChange}
                    onKeyUp={handleEnterKeyPress}
                />
                <SearchButton keyword={keyword} />
            </InputContainer>
            {isFocused && (
                <SearchResultContainer>
                    <DetailS fontColor={COLOR.GRAY800}>
                        추천 검색 키워드
                    </DetailS>
                    <SuggestedSearch>
                        {recommendTag.map(tag => {
                            return (
                                <BasicChip
                                    key={tag.id}
                                    title={tag.title}
                                    fontColor={COLOR.GRAY800}
                                    width={"4rem"}
                                />
                            );
                        })}
                    </SuggestedSearch>
                </SearchResultContainer>
            )}
        </Container>
    );
};

export default SearchBar;

const Container = styled.div`
    margin-left: 1.25rem;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    width: 22.5rem;
    height: 2.25rem;
    background-color: ${COLOR.GRAY50};
    border-radius: 1.25rem;
    padding: 0 0.5rem;
    margin-bottom: 0.5rem;
`;

const Input = styled.input`
    all: unset;
    width: 100%;
    letter-spacing: -0.01em;
    margin-left: 0.5rem;
    font-weight: ${FONT_STYLE.PRETENDARD_100.WEIGTHT};
    font-size: ${FONT_STYLE.PRETENDARD_100.SIZE};
    line-height: ${FONT_STYLE.PRETENDARD_100.HEIGHT};
    ::placeholder {
        color: ${COLOR.GRAY400};
    }
    color: ${COLOR.GRAY900};
    text-align: left;
`;

const SearchResultContainer = styled.div`
    display: flex;
    position: fixed;
    height: auto;
    flex-direction: column;
    width: 22.5rem;
    border-radius: 0.5rem;
    padding: 1.5rem;
    background-color: ${COLOR.GRAY50};
    z-index: 1;
`;

const SuggestedSearch = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
