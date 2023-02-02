const selectCheckBoxBasedOnPeriod = (period, isDone, isProgress, todos) => {
  let icon;
  const unfinishedTodos = todos?.filter((el) => el.status === false);

  switch (true) {
    case unfinishedTodos?.length === 0:
      icon = "checkbox_blue";
      break;
    case isDone:
      icon = "TodoBoxCheckBoxOn";
      break;
    case !isProgress:
      icon = "TodoBoxCheckBoxOff";
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
