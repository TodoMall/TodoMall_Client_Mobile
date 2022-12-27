import { rest } from "msw";

export const paymentHandlers = [
  // Handles a POST /payment/complete request
  rest.post("/payment/complete", null),
  // Handles a GET /payment request
  rest.get("/payment", null),
];
