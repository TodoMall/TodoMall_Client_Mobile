/* parameters : (duration : number ,  : boolean , isClear : boolean) */
// 모든 투두 완료 & 인증만 남은 경우 "rgba(24, 144, 255, 1)" : "rgba(24, 144, 255, 0.2)";
// 남은 투두가 있는 상황 : 가장 가까운 투두만 expireDate에 맞는 컬러
// 끝나지 않은 투두 && 완료되지 않은 2번째 투두 : 기존과 같이
// 남은 투두가 있는 상황 && 완료된 투두 : 기존과 같이 완료된 투두

const selectCheckBoxBasedOnPeriod = (period, isDone, todos) => {
  let icon;
  const unfinishedTodos = todos?.filter((el) => el.status === false);

  switch (true) {
    case unfinishedTodos?.length === 0:
      icon = "checkbox_blue";
      break;
    case isDone:
      icon = "TodoBoxCheckBoxOn";
      break;
    case period >= 4:
      icon = "checkbox_green";
      break;
    case period >= 1:
      icon = "checkbox_yellow";
      break;
    case period < 1:
      icon = "checkbox_red";
      break;

    default:
  }
  return `images/${icon}.svg`;
};

export default selectCheckBoxBasedOnPeriod;
