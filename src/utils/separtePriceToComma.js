const separtePriceToComma = (price = 10000) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export default separtePriceToComma;
