import { useState } from "react";
import styled from "styled-components";

import { useQuery } from "@apollo/client";

import { getAllNotification } from "../apollo/domain/member";
import { COLOR, NOTIFICATION_TYPE } from "../constants";
import { useDateFormat } from "../hooks";
import { Card } from "../mds";
import { RowBox } from "../mds/box";
import {
    NewAlarmIcon,
    PromotionIcon,
    RecommendIcon,
    RemindIcon,
} from "../mds/icon";
import { BasicHeader } from "../mds/layout/mobile/headers";
import { BodyL, BodyXXS } from "../mds/text";

const NotificationPage = () => {
    const [notificationList, setNotification] = useState();
    const { NEW_CLASS, PROMOTION, RECOMMEND, REMIND } = NOTIFICATION_TYPE;
    const { data } = useQuery(getAllNotification, {
        onCompleted: data => {
            setNotification(data.getAllAlarms);
        },
    });

    const getIconByNotificationType = type => {
        if (type === NEW_CLASS) {
            return { icon: <NewAlarmIcon />, title: "신규 클래스 알림" };
        }
        if (type === PROMOTION) {
            return { icon: <PromotionIcon />, title: "프로모션" };
        }
        if (type === RECOMMEND) {
            return { icon: <RecommendIcon />, title: "추천 클래스 알림" };
        }
        if (type === REMIND) {
            return { icon: <RemindIcon />, title: "투두 리마인드" };
        }
    };

    return (
        <>
            <BasicHeader pageDescription={"알림"} />
            <CardContainer>
                {notificationList?.map(notification => {
                    const notificationIntro = getIconByNotificationType(
                        notification?.type
                    );
                    return (
                        <Card
                            key={notification?.id}
                            justifyContent={"none"}
                            margin={"0.25rem 0"}
                            backgroundColor={COLOR.GRAY50}
                        >
                            <RowBox
                                alignItems={"none"}
                                margin={"0 0 0.25rem 0"}
                            >
                                <IconContainer>
                                    {notificationIntro?.icon}
                                    <BodyXXS
                                        fontColor={COLOR.GRAY500}
                                        margin={"0 0 0 0.25rem"}
                                    >
                                        {notificationIntro?.title}
                                    </BodyXXS>
                                    <BodyXXS fontColor={COLOR.GRAY500}>
                                        {useDateFormat(notification?.createdAt)}
                                    </BodyXXS>
                                </IconContainer>
                            </RowBox>
                            <BodyL>{notification?.context}</BodyL>
                        </Card>
                    );
                })}
            </CardContainer>
        </>
    );
};
export default NotificationPage;

const CardContainer = styled.div`
    padding: 0.75rem 1rem;
`;

const IconContainer = styled.div`
    display: flex;
`;
