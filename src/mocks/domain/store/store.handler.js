import { graphql } from "msw";

import { PROMOTION_TYPE } from "../../../constants";
import {
    CategoryClassList,
    DiscountedClass,
    RecommendCategoryClass,
    RecommnedClass,
    getProductByIdOutput,
} from "./store.data";

export const storeHandlers = [
    graphql.query("getProductById", (req, res, ctx) => {
        return res(ctx.data(getProductByIdOutput));
    }),

    graphql.query("getPromotionByType", (req, res, ctx) => {
        const { type } = req.variables;

        if (type === PROMOTION_TYPE.MYCOURSE_00) {
            return res(ctx.data(null));
        }
        if (type === PROMOTION_TYPE.STOREMAIN_00) {
            return res(ctx.data(RecommnedClass));
        }
        if (type === PROMOTION_TYPE.STOREMAIN_01) {
            return res(ctx.data(DiscountedClass));
        }
        if (type === PROMOTION_TYPE.STOREMAIN_02) {
            return res(ctx.data(RecommendCategoryClass));
        }
    }),

    graphql.query("getProductByType", (req, res, ctx) => {
        return res(ctx.data(CategoryClassList));
    }),
];
