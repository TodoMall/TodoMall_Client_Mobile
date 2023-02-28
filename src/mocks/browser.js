import { setupWorker } from "msw";

import { memberHandlers } from "./domain/member/member.handler";
import { myCourseHandlers } from "./domain/mycourse/mycourse.handler";
import { searchHandlers } from "./domain/store/search.handler";

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(
    ...searchHandlers,
    ...myCourseHandlers,
    ...memberHandlers
);
