export const productInfo = {
    getProductById: {
        title: "피그마 마스터하고 UI 디자인",
        price: 32800,
        discountPrice: 19800,
        discountPercent: 60,
        sessions: [
            {
                title: "클론디자인 - 레이아웃",
                orderBy: 2,
                duration: 3,
            },
            {
                title: "프로토타입 제작",
                orderBy: 4,
                duration: 3,
            },
            {
                title: "피그마 시작",
                orderBy: 1,
                duration: 3,
            },
            {
                title: "클론디자인 - 아이콘",
                orderBy: 3,
                duration: 3,
            },
        ],
        creator: {
            id: "fd7e2d8d-6e67-4633-89c0-68549a0807a7",
        },
    },
};

export const paymentRusultInfo = {
    getOrderByOrderNumber: {
        pgProvider: "카카오페이",
        createdAt: "2022.12.02 14:30:32",
        product: {
            discountPrice: 19800,
        },
        member: {
            name: "김상혁",
        },
    },
};
