import { useState } from "react";

import { CheckBoxColumn } from "../../../mds";

const AgreementButton = () => {
    const [isAgreed, setIsAgreed] = useState(false);
    return (
        <CheckBoxColumn isChecked={isAgreed}>
            (필수) 서비스 이용약관 동의
        </CheckBoxColumn>
    );
};

export default AgreementButton;
