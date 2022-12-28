import { rest } from "msw";

export const paymentHandlers = [
  // Handles a POST /payment/complete request
  rest.get(`/payment/complete`, (req, res, ctx) => {
    return res(ctx.text("text"));
  }),
];
