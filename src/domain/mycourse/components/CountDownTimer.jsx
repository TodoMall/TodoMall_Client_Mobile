import dayjs from "dayjs";
import { useState } from "react";

import { COLOR } from "../../../constants";
import useInterval from "../../../hooks/useInterval";
import { BodyL } from "../../../mds/text";

const CountDownTimer = ({ expireDate }) => {
    const leftTime = dayjs(expireDate).subtract(dayjs());
    const [formattedExpireDate, setFormattedExpireDate] = useState(
        dayjs(leftTime)
    );

    useInterval(
        () =>
            setFormattedExpireDate(
                dayjs(formattedExpireDate).subtract(1, "seconds")
            ),
        1000
    );

    return (
        <BodyL fontColor={COLOR.ERROR500} margin={"0 0.25rem 0 0"}>
            {dayjs(formattedExpireDate).format("HH:mm:ss")}
        </BodyL>
    );
};

export default CountDownTimer;
