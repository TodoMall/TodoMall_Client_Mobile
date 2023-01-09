import { setupWorker } from "msw";
import { paymentHandlers } from "./paymentHandlers";
import { userTodoHandler } from "./userTodoHandler";

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...paymentHandlers, ...userTodoHandler);
