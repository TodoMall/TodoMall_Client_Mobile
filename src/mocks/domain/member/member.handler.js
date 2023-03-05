import { graphql } from "msw";

import { paidProductList, subscribeProductList } from "./member.data";

export const memberHandlers = [
    graphql.query("getMemberById", (req, res, ctx) => {
        return res(ctx.data(subscribeProductList));
    }),

    graphql.query("getOrderByMemberId", (req, res, ctx) => {
        return res(ctx.data(paidProductList));
    }),
];
