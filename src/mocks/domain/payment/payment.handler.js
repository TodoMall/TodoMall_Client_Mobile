import { graphql } from "msw";

import { ORDER_STATE } from "../../../constants";
import { paymentRusultInfo, productInfo } from "./payment.data";

export const paymentHandlers = [
    graphql.query("getOrderProductById", (req, res, ctx) => {
        return res(ctx.data(productInfo));
    }),

    graphql.query("getOrderByOrderNumber", (req, res, ctx) => {
        return res(ctx.data(paymentRusultInfo));
    }),

    graphql.mutation("createOrder", (req, res, ctx) => {
        return res(
            ctx.data({
                createOrder: {
                    orderNumber: "ORD202332-000100",
                },
            })
        );
    }),

    graphql.mutation("verifyOrder", (req, res, ctx) => {
        return res(
            ctx.data({
                verifyOrder: {
                    state: ORDER_STATE.CANCEL,
                    // state: ORDER_STATE.SUCCESS,
                },
            })
        );
    }),
];
