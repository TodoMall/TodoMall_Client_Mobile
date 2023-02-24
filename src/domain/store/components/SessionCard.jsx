import styled from "styled-components";

import { COLOR } from "../../../constants";
import { Card } from "../../../mds";
import { RowBox } from "../../../mds/box";
import { BasicButton } from "../../../mds/button";
import { FailIcon, SessionBasicIcon, WarningIcon } from "../../../mds/icon";
import { BodyL, BodyM, BodyXL, HeadingXL } from "../../../mds/text";

const SessionCard = () => {
    /* FIXME : delete demo datas */
    return (
        <>
            <Card backgroundColor={COLOR.GRAY50}>
                <RowBox margin={"0 0 0.25rem 0"} justifyContent={"flex-start"}>
                    <WarningIcon />
                    <BodyL fontColor={COLOR.ERROR500} margin={"0 0 0 0.25rem"}>
                        {"3월 7일 0시까지"}
                    </BodyL>
                </RowBox>
                <TextContainer>
                    <HeadingXL>{"투두몰에서 클래스 다운받기"}</HeadingXL>
                    <BodyM>{"투두리스트 따라하고 성장하기"}</BodyM>
                </TextContainer>
                <RowBox>
                    <RowBox
                        margin={"0.5rem 0 0 0"}
                        width={"50%"}
                        justifyContent={"flex-start"}
                    >
                        <BodyL
                            fontColor={COLOR.GRAY700}
                            margin={"0 0.25rem 0 0"}
                        >
                            인증 마감까지
                        </BodyL>
                        <BodyL fontColor={COLOR.ERROR500}>{"17:36:22"}</BodyL>
                    </RowBox>
                    <BasicButton
                        backgroundColor={COLOR.ERROR500}
                        width={"8.375rem"}
                    >
                        <BodyXL fontColor={COLOR.WHITE}>
                            {"바로 학습하기"}
                        </BodyXL>
                    </BasicButton>
                </RowBox>
            </Card>
            {/* FIXME : 이 주석 아래부터는 UI 작성을 위한 코드입니다. */}
            <Card backgroundColor={COLOR.GRAY50}>
                <RowBox margin={"0 0 0.25rem 0"} justifyContent={"flex-start"}>
                    <SessionBasicIcon />
                    <BodyL fontColor={COLOR.GRAY500} margin={"0 0 0 0.25rem"}>
                        {"3월 8일 0시까지"}
                    </BodyL>
                </RowBox>
                <TextContainer>
                    <HeadingXL>{"투두몰에서 클래스 다운받기"}</HeadingXL>
                    <BodyM>{"투두리스트 따라하고 성장하기"}</BodyM>
                </TextContainer>
                <RowBox>
                    <RowBox
                        margin={"0.5rem 0 0 0"}
                        width={"50%"}
                        justifyContent={"flex-start"}
                    >
                        <BodyL
                            fontColor={COLOR.GRAY700}
                            margin={"0 0.25rem 0 0"}
                        >
                            인증까지
                        </BodyL>
                        <BodyL fontColor={COLOR.MAIN500}>{"3개의 투두"}</BodyL>
                    </RowBox>
                    <BasicButton width={"8.375rem"}>
                        <BodyXL fontColor={COLOR.WHITE}>
                            {"바로 학습하기"}
                        </BodyXL>
                    </BasicButton>
                </RowBox>
            </Card>
            <Card backgroundColor={COLOR.GRAY50}>
                <RowBox margin={"0 0 0.25rem 0"} justifyContent={"flex-start"}>
                    <SessionBasicIcon />
                    <BodyL fontColor={COLOR.GRAY500} margin={"0 0 0 0.25rem"}>
                        {"3월 14일 0시까지"}
                    </BodyL>
                </RowBox>
                <TextContainer>
                    <HeadingXL>{"투두몰에서 클래스 다운받기"}</HeadingXL>
                    <BodyM>{"투두리스트 따라하고 성장하기"}</BodyM>
                </TextContainer>
                <RowBox>
                    <RowBox
                        margin={"0.5rem 0 0 0"}
                        width={"50%"}
                        justifyContent={"flex-start"}
                    >
                        <BodyL fontColor={COLOR.GRAY700}>
                            모든 투두를 완료했어요!
                        </BodyL>
                    </RowBox>
                    <BasicButton
                        backgroundColor={COLOR.SUCCESS500}
                        width={"8.375rem"}
                    >
                        <BodyXL fontColor={COLOR.WHITE}>{"지금 인증"}</BodyXL>
                    </BasicButton>
                </RowBox>
            </Card>
            <Card backgroundColor={COLOR.GRAY50}>
                <RowBox margin={"0 0 0.25rem 0"} justifyContent={"flex-start"}>
                    <WarningIcon />
                    <BodyL fontColor={COLOR.ERROR500} margin={"0 0 0 0.25rem"}>
                        {"인증기한 마감"}
                    </BodyL>
                </RowBox>
                <TextContainer>
                    <HeadingXL>{"투두몰에서 클래스 다운받기"}</HeadingXL>
                    <BodyM>{"투두리스트 따라하고 성장하기"}</BodyM>
                </TextContainer>
                <RowBox>
                    <BasicButton
                        margin={"0 0.5rem 0 0"}
                        backgroundColor={COLOR.GRAY100}
                        width={"50%"}
                    >
                        <BodyL fontColor={COLOR.GRAY400}>
                            {"나중에 도전하기"}
                        </BodyL>
                    </BasicButton>
                    <BasicButton backgroundColor={COLOR.ERROR500} width={"50%"}>
                        <BodyXL fontColor={COLOR.WHITE}>
                            {"다시 도전하기"}
                        </BodyXL>
                    </BasicButton>
                </RowBox>
            </Card>
            <Card backgroundColor={COLOR.GRAY50}>
                <RowBox margin={"0 0 0.25rem 0"} justifyContent={"flex-start"}>
                    <FailIcon />
                    <BodyL fontColor={COLOR.ERROR500} margin={"0 0 0 0.25rem"}>
                        {"인증기한 마감"}
                    </BodyL>
                </RowBox>
                <TextContainer>
                    <HeadingXL>{"투두몰에서 클래스 다운받기"}</HeadingXL>
                    <BodyM>{"투두리스트 따라하고 성장하기"}</BodyM>
                </TextContainer>
                <RowBox justifyContent={"flex-end"}>
                    <BasicButton backgroundColor={COLOR.ERROR500} width={"50%"}>
                        <BodyXL fontColor={COLOR.WHITE}>
                            {"도전 삭제하기"}
                        </BodyXL>
                    </BasicButton>
                </RowBox>
            </Card>
        </>
    );
};
export default SessionCard;

const TextContainer = styled.div`
    margin: 0.25rem 0 0.5rem 0;
    width: 100%;
`;
