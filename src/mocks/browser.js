import { setupWorker } from "msw";

import { paymentHandlers } from "./domain/payment";
import { searchHandlers } from "./domain/store/search.handler";

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...searchHandlers, ...paymentHandlers);
