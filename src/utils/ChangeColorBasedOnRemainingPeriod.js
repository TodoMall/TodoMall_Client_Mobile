/* parameters : (duration : number , isText : boolean , isClear : boolean) */
// 모든 투두 완료 & 인증만 남은 경우 "rgba(24, 144, 255, 1)" : "rgba(24, 144, 255, 0.2)";
// 남은 투두가 있는 상황 : 가장 가까운 투두만 expireDate에 맞는 컬러
// 끝나지 않은 투두 && 완료되지 않은 2번째 투두 : 기존과 같이
// 남은 투두가 있는 상황 && 완료된 투두 : 기존과 같이 완료된 투두

const changeColorBasedOnRemainingPeriod = (period, isText, isDone, todos) => {
  let color;
  const isFalsy = todos?.filter((el) => el.status === false);

  switch (true) {
    case isFalsy?.length === 0:
      color = isText ? "rgba(24, 144, 255, 1)" : "rgba(24, 144, 255, 0.2)";
      break;
    case isDone && isText:
      color = "#222222";
      break;
    case period >= 4:
      color = isText ? "rgba(82, 196, 26, 1)" : "rgba(82, 196, 26, 0.2)";
      break;
    case period >= 1:
      color = isText ? "rgba(250, 173, 20, 1)" : "rgba(250, 173, 20, 0.2)";
      break;
    case period < 1:
      color = isText ? "rgba(255, 77, 79, 1)" : "rgba(255, 77, 79, 0.2)";
      break;

    default:
      color = "rgba(0,0,0,0)";
  }
  return color;
};

export default changeColorBasedOnRemainingPeriod;
