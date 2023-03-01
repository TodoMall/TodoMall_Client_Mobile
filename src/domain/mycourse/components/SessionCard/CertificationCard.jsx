import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { COLOR, PATH } from "../../../../constants";
import { Card } from "../../../../mds";
import { RowBox } from "../../../../mds/box";
import { BasicButton } from "../../../../mds/button";
import { SessionBasicIcon } from "../../../../mds/icon";
import { BodyL, BodyM, BodyXL, HeadingXL } from "../../../../mds/text";

const CertificationCard = ({
    courseId,
    sessionId,
    title,
    missionTitle,
    fotmattedExpireDate,
}) => {
    const navigate = useNavigate();
    const handleCertification = () => {
        navigate(PATH.MISSION_CERTIFICATION(courseId, sessionId));
    };

    return (
        <Card backgroundColor={COLOR.GRAY50}>
            <RowBox margin={"0 0 0.25rem 0"} justifyContent={"flex-start"}>
                <SessionBasicIcon />
                <BodyL fontColor={COLOR.GRAY500} margin={"0 0 0 0.25rem"}>
                    {fotmattedExpireDate}
                </BodyL>
            </RowBox>
            <TextContainer>
                <HeadingXL>{title}</HeadingXL>
                <BodyM>{missionTitle}</BodyM>
            </TextContainer>
            <RowBox>
                <RowBox
                    margin={"0.5rem 0 0 0"}
                    width={"auto"}
                    justifyContent={"flex-start"}
                >
                    <BodyL fontColor={COLOR.GRAY700} margin={"0 0.25rem 0 0"}>
                        모든 투두를 완료했어요!
                    </BodyL>
                </RowBox>
                <BasicButton
                    width={"auto"}
                    margin={"0.5rem 0 0 0"}
                    backgroundColor={COLOR.SUCCESS500}
                    onClick={handleCertification}
                >
                    <BodyXL fontColor={COLOR.WHITE}>지금 인증</BodyXL>
                </BasicButton>
            </RowBox>
        </Card>
    );
};
export default CertificationCard;

const TextContainer = styled.div`
    margin: 0.25rem 0 0.5rem 0;
    width: 100%;
`;
