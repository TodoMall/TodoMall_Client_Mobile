import styled from "styled-components";

import { COLOR } from "../constants";
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
    return (
        <Container>
            <BasicHeader pageDescription={"알림"} />
            <CardContainer>
                <Card
                    justifyContent={"none"}
                    margin={"0.25rem 0"}
                    backgroundColor={COLOR.GRAY50}
                >
                    <RowBox alignItems={"none"} margin={"0 0 0.25rem 0"}>
                        <IconContainer>
                            <NewAlarmIcon />
                            <BodyXXS
                                fontColor={COLOR.GRAY500}
                                margin={"0 0 0 0.25rem"}
                            >
                                신규 클래스 알림
                            </BodyXXS>
                        </IconContainer>
                        <BodyXXS fontColor={COLOR.GRAY500}>36분 전</BodyXXS>
                    </RowBox>
                    <BodyL>
                        {
                            "신규 클래스를 만나보세요 🎉 {클래스 제목} 클래스가 개설됐습니다. 지금 시작하면 {예상 결과물}를 만들 수 있어요!"
                        }
                    </BodyL>
                </Card>
                <Card
                    justifyContent={"none"}
                    margin={"0.25rem 0"}
                    backgroundColor={COLOR.GRAY50}
                >
                    <RowBox alignItems={"none"} margin={"0 0 0.25rem 0"}>
                        <IconContainer>
                            <PromotionIcon />
                            <BodyXXS
                                fontColor={COLOR.GRAY500}
                                margin={"0 0 0 0.25rem"}
                            >
                                프로모션
                            </BodyXXS>
                        </IconContainer>
                        <BodyXXS fontColor={COLOR.GRAY500}>23시간 전</BodyXXS>
                    </RowBox>
                    <BodyL>
                        {
                            "할인된 가격으로 클래스를 도전해봐요 💸 {클래스 제목} 클래스가 {할인 종료일}까지 할인된 가격으로 제공됩니다. 지금 시작하면 {예상 결과물}를 만들 수 있어요!"
                        }
                    </BodyL>
                </Card>
                <Card
                    justifyContent={"none"}
                    margin={"0.25rem 0"}
                    backgroundColor={COLOR.GRAY50}
                >
                    <RowBox alignItems={"none"} margin={"0 0 0.25rem 0"}>
                        <IconContainer>
                            <RecommendIcon />
                            <BodyXXS
                                fontColor={COLOR.GRAY500}
                                margin={"0 0 0 0.25rem"}
                            >
                                추천 클래스 알림
                            </BodyXXS>
                        </IconContainer>
                        <BodyXXS fontColor={COLOR.GRAY500}>1일 전</BodyXXS>
                    </RowBox>
                    <BodyL>
                        {
                            "오늘도 성장한 당신에게 🚀 {클래스 제목} 클래스를 추천드려요. 지금 시작하면 {예상 결과물}를 만들 수 있어요"
                        }
                    </BodyL>
                </Card>
                <Card
                    justifyContent={"none"}
                    margin={"0.25rem 0"}
                    backgroundColor={COLOR.GRAY50}
                >
                    <RowBox alignItems={"none"} margin={"0 0 0.25rem 0"}>
                        <IconContainer>
                            <RemindIcon />
                            <BodyXXS
                                fontColor={COLOR.GRAY500}
                                margin={"0 0 0 0.25rem"}
                            >
                                투두 리마인드
                            </BodyXXS>
                        </IconContainer>
                        <BodyXXS fontColor={COLOR.GRAY500}>7일 전</BodyXXS>
                    </RowBox>
                    <BodyL>
                        {
                            "{클래스 제목} 클래스가 내일 종료됩니다. 남은 {미완료 된 투두 갯수}개의 투두를 체크하고, 미션을 인증해주세요."
                        }
                    </BodyL>
                </Card>
                <Card
                    justifyContent={"none"}
                    margin={"0.25rem 0"}
                    backgroundColor={COLOR.GRAY50}
                >
                    <RowBox alignItems={"none"} margin={"0 0 0.25rem 0"}>
                        <IconContainer>
                            <RemindIcon />
                            <BodyXXS
                                fontColor={COLOR.GRAY500}
                                margin={"0 0 0 0.25rem"}
                            >
                                투두 리마인드
                            </BodyXXS>
                        </IconContainer>
                        <BodyXXS fontColor={COLOR.GRAY500}>23.01.28</BodyXXS>
                    </RowBox>
                    <BodyL>
                        {
                            "{클래스 제목} 클래스가 내일 종료됩니다. 남은 {미완료 된 투두 갯수}개의 투두를 체크하고, 미션을 인증해주세요."
                        }
                    </BodyL>
                </Card>
            </CardContainer>
        </Container>
    );
};
export default NotificationPage;

const Container = styled.div``;

const CardContainer = styled.div`
    padding: 0.75rem 1rem;
`;

const IconContainer = styled.div`
    display: flex;
`;
