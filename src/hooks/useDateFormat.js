import dayjs from "dayjs";

const useDateFormat = targetDate => {
    const today = dayjs();
    const timeValue = dayjs(targetDate);

    const betweenTime = Math.floor(today.diff(timeValue, "minute"));

    if (betweenTime < 60) {
        return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
        return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay <= 7) {
        return `${betweenTimeDay}일전`;
    }

    if (betweenTimeDay > 7) {
        return timeValue.format("YY.MM.DD");
    }
};

export default useDateFormat;
