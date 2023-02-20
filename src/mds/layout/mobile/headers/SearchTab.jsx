import {
  COLOR,
  FONT_STYLE,
  FONT_WEIGTHT,
  recommendTag,
} from "../../../../constants";
import styled from "styled-components";
import { useInput } from "../../../../hooks";
import { PreviousArrowButton } from "../../../button";
import { BasicChip } from "../../../chip";
import { useNavigate } from "react-router-dom";

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
          value={keyword}
          onChange={handleKeywordChange}
          onKeyUp={handleEnterKeyPress}
        />
      </InputContainer>
      <SearchResultContainer>
        <Text>추천 검색 키워드</Text>
        <SuggestedSearch>
          {recommendTag.map((el) => {
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
  z-index: 2;
`;

const SuggestedSearch = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const SearchList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  letter-spacing: -0.01em;
  font-weight: ${FONT_WEIGTHT.PRETENDARD_MEDIUM};
  font-size: ${FONT_STYLE.PRETENDARD_300.SIZE};
  line-height: ${FONT_STYLE.PRETENDARD_300.HEIGTH};
  margin-top: 2px;
  ::placeholder {
    text-align: left;
    letter-spacing: -0.01em;
    color: ${COLOR.GRAY300};
  }
`;

const Text = styled.p`
  font-weight: ${FONT_WEIGTHT.PRETENDARD_MEDIUM};
  font-size: ${FONT_STYLE.PRETENDARD_100.SIZE};
  line-height: ${FONT_STYLE.PRETENDARD_100.HEIGTH};
  color: ${COLOR.GRAY800};
  letter-spacing: -0.01em;
`;

const SearchItem = styled.div`
  width: 100%;
  height: 1rem;
  text-align: center;
  margin: 0.75rem 0;
  cursor: pointer;
`;
