import { setupWorker } from "msw";

// This configures a Service Worker with the given request handlers.
import { memberHandlers } from "./domain/member/member.handler";
import { myCourseHandlers } from "./domain/mycourse/mycourse.handler";
import { paymentHandlers } from "./domain/payment/payment.handler";
import { storeHandlers } from "./domain/store/store.handler";

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(
    ...myCourseHandlers,
    ...memberHandlers,
    ...storeHandlers,
    ...paymentHandlers
);
