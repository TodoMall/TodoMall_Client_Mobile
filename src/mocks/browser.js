import { setupWorker } from "msw";

import { myCourseHandlers } from "./domain/mycourse";
import { searchHandlers } from "./domain/store";

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...searchHandlers, ...myCourseHandlers);
