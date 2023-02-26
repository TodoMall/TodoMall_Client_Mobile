import { graphql } from "msw";

export const myCourseHandlers = [
    graphql.query("getAllPromotion", (req, res, ctx) => {
        return res(
            ctx.data({
                getAllPromotion: [
                    {
                        id: "1",
                        title: "title 1",
                        products: {
                            id: "product id 1",
                            thumbnailUrl: "/image/rocket.png",
                            discountPrice: 10,
                            discountPercent: 20000,
                            subDescription:
                                "서울 사이버 대학을 다니고 나의 성공 시대 시작됐다.서울 사이버 대학을 다니고 나의 성공 시대 시작됐다.서울 사이버 대학을 다니고 나의 성공 시대 시작됐다.서울 사이버 대학을 다니고 나의 성공 시대 시작됐다.서울 사이버 대학을 다니고 나의 성공 시대 시작됐다.서울 사이버 대학을 다니고 나의 성공 시대 시작됐다.",
                        },
                    },
                    {
                        id: "2",
                        title: "title 2",
                        products: {
                            id: "product id 2",
                            thumbnailUrl: "/image/rocket.png",
                            discountPrice: 10,
                            discountPercent: 20000,
                            subDescription:
                                "서울 사이버 대학을 다니고 나의 성공 시대 시작됐다.서울 사이버 대학을 다니고 나의 성공 시대 시작됐다.서울 사이버 대학을 다니고 나의 성공 시대 시작됐다.서울 사이버 대학을 다니고 나의 성공 시대 시작됐다.서울 사이버 대학을 다니고 나의 성공 시대 시작됐다.서울 사이버 대학을 다니고 나의 성공 시대 시작됐다.",
                        },
                    },
                    {
                        id: "3",
                        title: "title 3",
                        products: {
                            id: "product id 3",
                            thumbnailUrl: "/image/rocket.png",
                            discountPrice: 10,
                            discountPercent: 20000,
                            subDescription:
                                "서울 사이버 대학을 다니고 나의 성공 시대 시작됐다.서울 사이버 대학을 다니고 나의 성공 시대 시작됐다.서울 사이버 대학을 다니고 나의 성공 시대 시작됐다.서울 사이버 대학을 다니고 나의 성공 시대 시작됐다.서울 사이버 대학을 다니고 나의 성공 시대 시작됐다.서울 사이버 대학을 다니고 나의 성공 시대 시작됐다.",
                        },
                    },
                ],
            })
        );
    }),
];
