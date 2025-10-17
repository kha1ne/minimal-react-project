import { createComponent } from "@lit/react";
import React from "react";

import { SimpleGreeting as SimpleGreetingWC } from "./SimpleGreeting.js";

/**
 * React wrapper for SimpleGreeting Lit component
 */
export const SimpleGreeting = createComponent({
  tagName: "simple-greeting",
  elementClass: SimpleGreetingWC,
  react: React,
});
