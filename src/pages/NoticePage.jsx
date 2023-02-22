import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR } from "../constants";
import { Card } from "../mds";
import { RowBox } from "../mds/box";
import { NoticeIcon } from "../mds/icon";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { BodyM, BodyXXS } from "../mds/text";

const NoticePage = () => {
    const navigate = useNavigate();

    const handleNoticeDetail = () => {
        const noticeId = "test";
        navigate(`/setting/notice/detail/noticeId=${noticeId}`);
    };

    // TODO : delete demo datas

    return (
        <Container>
            <BasicHeader pageDescription={"공지사항"} />
            <CardContainer>
                <Card
                    justifyContent={"none"}
                    margin={"0.25rem 0"}
                    backgroundColor={COLOR.GRAY100}
                    onClick={handleNoticeDetail}
                >
                    <RowBox alignItems={"none"} margin={"0 0 0.25rem 0"}>
                        <IconContainer>
                            <NoticeIcon />
                            <BodyXXS marginLeft={"0.25rem"}>공지사항</BodyXXS>
                        </IconContainer>
                        <BodyXXS>36분 전</BodyXXS>
                    </RowBox>
                    <BodyM>
                        {"2023년 3월 2일자 개인정보처리방침이 변경됐습니다."}
                    </BodyM>
                </Card>
                <Card
                    justifyContent={"none"}
                    margin={"0.25rem 0"}
                    backgroundColor={COLOR.GRAY100}
                    onClick={handleNoticeDetail}
                >
                    <RowBox alignItems={"none"} margin={"0 0 0.25rem 0"}>
                        <IconContainer>
                            <NoticeIcon />
                            <BodyXXS marginLeft={"0.25rem"}>공지사항</BodyXXS>
                        </IconContainer>
                        <BodyXXS>23시간 전</BodyXXS>
                    </RowBox>
                    <BodyM>
                        {"2023년 3월 2일자 개인정보처리방침이 변경됐습니다."}
                    </BodyM>
                </Card>
                <Card
                    justifyContent={"none"}
                    margin={"0.25rem 0"}
                    backgroundColor={COLOR.GRAY100}
                    onClick={handleNoticeDetail}
                >
                    <RowBox alignItems={"none"} margin={"0 0 0.25rem 0"}>
                        <IconContainer>
                            <NoticeIcon />
                            <BodyXXS marginLeft={"0.25rem"}>공지사항</BodyXXS>
                        </IconContainer>
                        <BodyXXS>3일 전</BodyXXS>
                    </RowBox>
                    <BodyM>
                        {"2023년 3월 2일자 개인정보처리방침이 변경됐습니다."}
                    </BodyM>
                </Card>
                <Card
                    justifyContent={"none"}
                    margin={"0.25rem 0"}
                    backgroundColor={COLOR.GRAY100}
                    onClick={handleNoticeDetail}
                >
                    <RowBox alignItems={"none"} margin={"0 0 0.25rem 0"}>
                        <IconContainer>
                            <NoticeIcon />
                            <BodyXXS marginLeft={"0.25rem"}>공지사항</BodyXXS>
                        </IconContainer>
                        <BodyXXS>2023.01.28</BodyXXS>
                    </RowBox>
                    <BodyM>
                        {"2023년 3월 2일자 개인정보처리방침이 변경됐습니다."}
                    </BodyM>
                </Card>
                <Card
                    justifyContent={"none"}
                    margin={"0.25rem 0"}
                    backgroundColor={COLOR.GRAY100}
                    onClick={handleNoticeDetail}
                >
                    <RowBox alignItems={"none"} margin={"0 0 0.25rem 0"}>
                        <IconContainer>
                            <NoticeIcon />
                            <BodyXXS
                                fontColor={COLOR.GRAY500}
                                margin={"0 0 0 0.25rem"}
                            >
                                공지사항
                            </BodyXXS>
                        </IconContainer>
                        <BodyXXS fontColor={COLOR.GRAY500}>2023.01.28</BodyXXS>
                    </RowBox>
                    <BodyM>
                        {"2023년 3월 2일자 개인정보처리방침이 변경됐습니다."}
                    </BodyM>
                </Card>
            </CardContainer>
        </Container>
    );
};
export default NoticePage;
const Container = styled.div``;
const CardContainer = styled.div`
    padding: 0.75rem 1rem;
`;

const IconContainer = styled.div`
    display: flex;
`;
