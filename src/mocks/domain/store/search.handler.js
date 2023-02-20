import { graphql } from "msw";
import { ProductTitleList } from "./search.data";
import { isNull } from "../../../utils";

export const searchHandlers = [
  graphql.query(`getOrderByOrderNumber`, (req, res, ctx) => {
    const { query } = req.variables || null;
    const filteredProductList = ProductTitleList.filter((element) =>
      element.title.includes(query)
    );
    if (isNull(filteredProductList)) {
      return res(
        ctx.data({
          message: "검색어와 일치하는 프로 혹은 클래스가 없습니다",
        })
      );
    }

    return res(
      ctx.data({
        filteredProductList,
      })
    );
  }),
];