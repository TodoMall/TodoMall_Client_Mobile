import { graphql } from "msw";

import { promotionList } from "./mycourse.data";

export const myCourseHandlers = [
    graphql.query("getAllPromotion", (req, res, ctx) => {
        return res(ctx.data(promotionList));
    }),
];
