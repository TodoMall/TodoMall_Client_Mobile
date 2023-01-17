import setClassStatus from "./SetClassStatus";

const classFilter = (plans) => {
  const SuccessClass = plans?.filter((plan) => plan.status === true);
  const failClass = plans?.filter((plan) => setClassStatus(plan) === "fail");
  const inProgressClass = plans?.filter(
    (plan) => !plan.status && setClassStatus(plan) === "inprogress"
  );

  return { SuccessClass, failClass, inProgressClass };
};
export default classFilter;
