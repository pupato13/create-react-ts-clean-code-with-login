import React from "react";
import { createRoot } from "react-dom/client";

import Router from "@/main/routes/router";

import "@/presentation/styles/global.scss";

const container = document.getElementById("main");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<Router />);
