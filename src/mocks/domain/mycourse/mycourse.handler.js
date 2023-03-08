import { graphql } from "msw";

import {
    getTodoBestPracticeByProductIdOutput,
    promotionList,
} from "./mycourse.data";

export const myCourseHandlers = [
    graphql.query("getAllPromotion", (req, res, ctx) => {
        return res(ctx.data(promotionList));
    }),
    graphql.query("getTodoBestPracticeByProductId", (req, res, ctx) => {
        return res(ctx.data(getTodoBestPracticeByProductIdOutput));
    }),
];
