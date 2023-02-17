import { PreviousArrowButton } from "../../../button";
import { COLOR, FONT_STYLE, FONT_WEIGTHT } from "../../../../constants";
import styled from "styled-components";
import { BasicChip } from "../../../chip";

const recommendKeyword = [
  { id: 1, title: "오피스 툴" },
  { id: 2, title: "노션" },
  { id: 3, title: "피그마" },
  { id: 4, title: "데이터" },
  { id: 5, title: "엑셀" },
  { id: 6, title: "피피티" },
  { id: 7, title: "노코드" },
  { id: 8, title: "첫 출근" },
  { id: 9, title: "첫 출근" },
  { id: 10, title: "서비스 기획" },
  { id: 11, title: "스타트업" },
];

const SearchTab = ({ onClose: handleClose = () => {} }) => {
  return (
    <Container>
      <SearchInputContainer>
        <PreviousArrowButton onClick={handleClose} />
        <Input placeholder="관심있는 싶은 툴을 검색해보세요." />
        <EmptyBox />
      </SearchInputContainer>
      <SearchResultContainer>
        <Text>추천 검색 키워드</Text>
        <ChipContainer>
          {recommendKeyword.map((el) => {
            return (
              <BasicChip
                key={el.id}
                title={el.title}
                fontColor={COLOR.GRAY800}
                width={"4rem"}
              />
            );
          })}
        </ChipContainer>
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
const SearchInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 0.5rem;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  color: ${COLOR.BLACK};
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

const EmptyBox = styled.div`
  width: 2.5rem;
  height: 2.5rem;
`;

const ChipContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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
