import { rest } from "msw";

export const paymentHandlers = [
  // Handles a POST /login request
  rest.post("/payment/complete", null),
  // Handles a GET /user request
  rest.get("/payment", null),
];
