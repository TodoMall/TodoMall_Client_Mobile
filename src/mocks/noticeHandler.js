import { rest } from "msw";
import { baseApiUrl } from "../constants";
import { noticeList } from "./mockDatas";

// export const noticeHandler = [
//   rest.get(`${baseApiUrl}notice`, async (req, res, ctx) => {
//     return res(
//       ctx.json({
//         notice: noticeList,
//       })
//     );
//   }),
// ];
export const noticeHandler = [
  rest.get(`${baseApiUrl}notice`, async (req, res, ctx) => {
    return res(ctx.json(noticeList));
  }),
];
