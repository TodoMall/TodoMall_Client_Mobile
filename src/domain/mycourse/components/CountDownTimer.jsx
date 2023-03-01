import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import React, { useEffect, useState } from "react";

import { COLOR } from "../../../constants";
import { BodyL } from "../../../mds/text";

dayjs.extend(duration);

const CountdownTimer = ({ expireDate }) => {
    const [countdown, setCountdown] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = dayjs();
            const end = dayjs(expireDate);
            const duration = dayjs.duration(end.diff(now));
            const hours = duration.hours();
            const minutes = duration.minutes();
            const seconds = duration.seconds();
            const formattedHour = hours < 10 ? `0${hours}` : hours;
            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
            const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
            setCountdown(
                `${formattedHour}:${formattedMinutes}:${formattedSeconds}`
            );
        }, 1000);
        return () => clearInterval(interval);
    }, [expireDate]);

    return (
        <BodyL fontColor={COLOR.ERROR500} margin={"0 0.25rem 0 0"}>
            {countdown}
        </BodyL>
    );
};

export default CountdownTimer;
