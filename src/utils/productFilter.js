import setProductStatus from "./setProductStatus";

const productFilter = (products) => {
  const SuccessProducts = products?.filter(
    (product) => product.status === true
  );
  const failProducts = products?.filter(
    (product) => setProductStatus(product) === "fail"
  );
  const inProgressProducts = products?.filter(
    (product) => !product.status && setProductStatus(product) === "inprogress"
  );

  return { SuccessProducts, failProducts, inProgressProducts };
};
export default productFilter;
