import { rest } from "msw";
import { baseApiUrl } from "../constants";
import { mockData } from "./mockDatas";

const email = "tkdgur234@naver.com";
export const userTodoHandler = [
  rest.get(`${baseApiUrl}user?email=${email}`, async (req, res, ctx) => {
    return res(
      ctx.json({
        ownProducts: mockData,
      })
    );
  }),
];
