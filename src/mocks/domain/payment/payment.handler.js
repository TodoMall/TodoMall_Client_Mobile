import { graphql } from "msw";

import { productInfo } from "./payment.data";

export const paymentHandlers = [
    graphql.query("getProductById", (req, res, ctx) => {
        return res(ctx.data(productInfo));
    }),

    graphql.mutation("createOrder", (req, res, ctx) => {
        // return res(ctx.data());
        return res(
            ctx.data({
                createOrder: {
                    orderNumber: "ORD202332-000100",
                },
            })
        );
    }),
];
