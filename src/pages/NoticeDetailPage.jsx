import { useParams } from "react-router-dom";
import styled from "styled-components";

import { useQuery } from "@apollo/client";

import { getNoticeById } from "../apollo/domain/member";
import { COLOR } from "../constants";
import { useDateFormat } from "../hooks";
import { Card } from "../mds";
import { RowBox } from "../mds/box";
import { NoticeIcon } from "../mds/icon";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { BodyL, BodyM, BodyXXS } from "../mds/text";

const NoticeDetailPage = () => {
    const { noticeId } = useParams();

    const { data: notice } = useQuery(getNoticeById, {
        variables: {
            id: noticeId,
        },
    });

    return (
        <Container>
            <BasicHeader pageDescription={"공지사항"} />
            <CardContainer>
                <Card
                    height="100%"
                    justifyContent={"none"}
                    margin={"0.25rem 0"}
                    backgroundColor={COLOR.GRAY50}
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
                        <BodyXXS fontColor={COLOR.GRAY500}>
                            {useDateFormat(
                                notice?.getAnnouncementById.lastPublishedAt
                            )}
                        </BodyXXS>
                    </RowBox>
                    <TextContainer>
                        <BodyL>{notice?.getAnnouncementById.title}</BodyL>
                    </TextContainer>
                    <ContentContainer>
                        <BodyM>변경 내용</BodyM>
                        <BodyM>{notice?.getAnnouncementById.content}</BodyM>
                    </ContentContainer>
                </Card>
            </CardContainer>
        </Container>
    );
};
export default NoticeDetailPage;

const Container = styled.div``;

const CardContainer = styled.div`
    height: 90vh;
    padding: 0.75rem 1rem;
`;

const TextContainer = styled.div`
    width: 100%;
    margin-top: 0.5rem;
`;

const IconContainer = styled.div`
    display: flex;
`;

const ContentContainer = styled.div`
    width: 100%;
    margin-top: 1.5rem;
`;
