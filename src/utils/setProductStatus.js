import dayjs from "dayjs";

const setProductStatus = (product) => {
  let status;
  product.sessions.forEach((session) => {
    let expireDate = dayjs(session.expireDate).startOf("day");
    const currentDate = dayjs().startOf("day");
    const deadLine = expireDate - currentDate > 0;
    if (product.status) {
      status = "success";
    }
    if (!product.status && deadLine) {
      status = "inprogress";
    }
    if (!product.status && !deadLine) {
      status = "fail";
    }
  });
  return status;
};
export default setProductStatus;
