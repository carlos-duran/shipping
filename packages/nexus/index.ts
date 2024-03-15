import { edenTreaty } from "@elysiajs/eden";
import type { App } from "cloud";

const getNexus = (url: string) => edenTreaty<App>(url);

export default getNexus;
