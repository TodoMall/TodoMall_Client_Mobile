import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BottomNavBar, Header } from "../../global";
import styled from "styled-components";
import { baseApiUrl } from "../../../constants";
import MyTodoItem from "./MyTodoItem";
import useAxios from "axios-hooks";
import { productFilter, setProductStatus } from "../../../utils";

const MyDashboard = () => {
  const { email } = { ...localStorage };
  const [searchParams] = useSearchParams();
  const currentStatus = searchParams.get("status");
  const [products, setProducts] = useState();
  const [{ data }] = useAxios(`${baseApiUrl}user?email=${email}`);

  const productStatus = {
    success: "성공",
    fail: "실패",
    inProgress: "진행",
  };

  const { SuccessProducts, failProducts, inProgressProducts } = productFilter(
    data?.ownProducts
  );

  let formattedProducts;
  switch (true) {
    case productStatus[currentStatus] === productStatus.success:
      formattedProducts = SuccessProducts;
      break;

    case productStatus[currentStatus] === productStatus.fail:
      formattedProducts = failProducts;
      break;
    case productStatus[currentStatus] === productStatus.inProgress:
      formattedProducts = inProgressProducts;
      break;
    default:
  }

  useEffect(() => {
    if (data) {
      setProducts(data?.ownProducts);
    }
  }, [data]);

  return (
    <Wrapper>
      <Container>
        <Header title={`${productStatus[currentStatus]} 클래스`} />
        {formattedProducts?.reverse().map((product, idx) => {
          return (
            <MyTodoItem
              key={product.id}
              status={setProductStatus(product)}
              id={products?.length - idx}
              title={product.title}
              icon={product.icon}
              productId={product.productId}
            />
          );
        })}
      </Container>
      <BottomNavBar position={"MYPAGE"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 63px;
  background-color: #fafaff;
`;
const Container = styled.div`
  height: 100%;
  margin-top: 56px;
  background-color: #fafaff;
`;
export default MyDashboard;
