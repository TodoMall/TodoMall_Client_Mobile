import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useQuery } from "@apollo/client";

import { getAllNotice } from "../apollo/domain/member";
import { COLOR, PATH } from "../constants";
import { useDateFormat } from "../hooks";
import { Card } from "../mds";
import { RowBox } from "../mds/box";
import { NoticeIcon } from "../mds/icon";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { BodyM, BodyXXS } from "../mds/text";

const NoticePage = () => {
    const navigate = useNavigate();

    const [noticeList, setNoticeList] = useState();

    const { data } = useQuery(getAllNotice, {
        onCompleted: data => {
            const filterdNoticeList = data.getAllAnnouncement.filter(
                notice => notice.published === true
            );
            setNoticeList(filterdNoticeList);
        },
    });

    const handleNoticeDetail = id => {
        navigate(`${PATH.NOTICE_DETAIL}/${id}`);
    };
    return (
        <Container>
            <BasicHeader pageDescription={"공지사항"} />
            <CardContainer>
                {noticeList?.map(notice => {
                    return (
                        <Card
                            key={notice?.id}
                            justifyContent={"none"}
                            margin={"0.25rem 0"}
                            backgroundColor={COLOR.GRAY50}
                            onClick={() => handleNoticeDetail(notice?.id)}
                        >
                            <RowBox
                                alignItems={"none"}
                                margin={"0 0 0.25rem 0"}
                            >
                                <IconContainer>
                                    <NoticeIcon />
                                    <BodyXXS
                                        fontColor={COLOR.GRAY400}
                                        margin={"0 0 0 0.25rem"}
                                    >
                                        공지사항
                                    </BodyXXS>
                                </IconContainer>

                                <BodyXXS fontColor={COLOR.GRAY400}>
                                    {useDateFormat(notice?.lastPublishedAt)}
                                </BodyXXS>
                            </RowBox>
                            <TextContainer>
                                <BodyM>{notice?.title}</BodyM>
                            </TextContainer>
                        </Card>
                    );
                })}
            </CardContainer>
        </Container>
    );
};
export default NoticePage;
const Container = styled.div``;

const TextContainer = styled.div`
    width: 100%;
`;

const CardContainer = styled.div`
    padding: 0.75rem 1rem;
`;

const IconContainer = styled.div`
    display: flex;
`;
