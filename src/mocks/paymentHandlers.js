import { rest } from "msw";
import { baseApiUrl } from "../constants";

export const paymentHandlers = [
  // Handles a POST /payment/complete request
  rest.post(`${baseApiUrl}payment/:planid`, async (req, res, ctx) => {
    const paymentMethodWithPayer = {
      name: "한솔빈",
      price: 20000,
      card_name: "롯데카드",
      pay_date: "2022.12.02 14:30:32",
    };

    return res(
      ctx.json({
        status: "success",
        message: "일반 결제 성공",
        response: paymentMethodWithPayer,
      })
    );
  }),
];
