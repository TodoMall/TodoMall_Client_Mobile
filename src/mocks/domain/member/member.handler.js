import { graphql } from "msw";

import { subscribeProductList } from "./member.data";

export const memberHandlers = [
    graphql.query("getMemberById", (req, res, ctx) => {
        console.log("mock getMemberById");
        return res(ctx.data(subscribeProductList));
    }),
];
