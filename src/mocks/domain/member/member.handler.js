import { graphql } from "msw";

import {
    getTodoDetailByMemberIdOutput,
    paidProductList,
    subscribeProductList,
} from "./member.data";

export const memberHandlers = [
    graphql.query("getMemberById", (req, res, ctx) => {
        return res(ctx.data(subscribeProductList));
    }),

    graphql.query("getOrderByMemberId", (req, res, ctx) => {
        return res(ctx.data(paidProductList));
    }),

    graphql.query("getTodoDetailByMemberId", (req, res, ctx) => {
        return res(ctx.data(getTodoDetailByMemberIdOutput));
    }),
];
