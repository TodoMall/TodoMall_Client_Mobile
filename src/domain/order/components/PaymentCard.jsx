import styled from "styled-components";

import { COLOR, IamportPaymentGateInfo } from "../../../constants";
import { RowBox } from "../../../mds/box";
import { RadioIcon } from "../../../mds/icon";
import { BodyL } from "../../../mds/text";

const PaymentCard = ({
    selectedMethod,
    onClick: handleSelectPaymentMethod = () => {},
}) => {
    return (
        <Container>
            {IamportPaymentGateInfo.map(method => {
                const checked = method.name === selectedMethod;
                return (
                    <RowBox key={method.id} justifyContent={"flex-start"}>
                        <IconWrapper
                            onClick={() =>
                                handleSelectPaymentMethod(method.name)
                            }
                        >
                            <RadioIcon isChecked={checked} />
                        </IconWrapper>
                        <BodyL>{method.description}</BodyL>
                    </RowBox>
                );
            })}
        </Container>
    );
};
export default PaymentCard;
const Container = styled.div`
    border-radius: 1.25rem;
    padding: 1rem 0.25rem;
    background-color: ${COLOR.GRAY50};
`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
`;
