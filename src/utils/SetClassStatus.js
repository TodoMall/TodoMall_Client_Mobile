import dayjs from "dayjs";

const setClassStatus = (plan) => {
  let status;
  plan.sessions.forEach((session) => {
    let expireDate = dayjs(session.expireDate).startOf("day");
    const currentDate = dayjs().startOf("day");
    const deadLine = expireDate - currentDate > 0;
    if (plan.status) {
      status = "success";
    }
    if (!plan.status && deadLine) {
      status = "inprogress";
    }
    if (!plan.status && !deadLine) {
      status = "fail";
    }
  });
  return status;
};
export default setClassStatus;
