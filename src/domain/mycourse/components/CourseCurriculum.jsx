import styled from "styled-components";

import { COLOR, PROCESS_STATUS } from "../../../constants";
import { Card, DetailBoxCoulmn } from "../../../mds";
import { BasicHeader } from "../../../mds/layout/mobile/headers";
import { BodyL, HeadingXL } from "../../../mds/text";

const CourseCurriculum = ({ product, session, onClose: handleClose }) => {
    const { SUCCESS, WAITING, FAIL } = PROCESS_STATUS;

    return (
        <>
            <BasicHeader
                pageDescription={session?.title}
                onClick={handleClose}
            />
            <Container>
                {product[0]?.sessions?.map((session, idx) => {
                    return (
                        <Card key={idx}>
                            <BodyL fontColor={COLOR.GRAY700}>
                                {idx + 1}번째 세션
                            </BodyL>
                            <HeadingXL margin={"0.25rem 0 0.5rem"}>
                                {session?.title}
                            </HeadingXL>
                            {session?.todos.map((todo, idx) => {
                                if (
                                    session?.status === WAITING ||
                                    session?.status === FAIL
                                ) {
                                    return (
                                        <BodyL
                                            key={idx}
                                            fontColor={COLOR.GRAY300}
                                            margin={"0.75rem 0"}
                                        >
                                            {todo?.title}
                                        </BodyL>
                                    );
                                } else {
                                    return (
                                        <DetailBoxCoulmn key={idx}>
                                            <BodyL>{todo?.title}</BodyL>
                                        </DetailBoxCoulmn>
                                    );
                                }
                            })}
                        </Card>
                    );
                })}
            </Container>
        </>
    );
};
export default CourseCurriculum;
const Container = styled.div`
    padding: 0 1rem;
    p {
        width: 100%;
    }
`;
