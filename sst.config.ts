import type { SSTConfig } from "sst";
import { AstroSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "celestial-cloud",
      region: "us-east-1",
      profile: "ironbay-dev",
    };
  },
  stacks(app) {
    app.stack(function Site(ctx) {
      const site = new AstroSite(ctx.stack, "site", {
        customDomain: "vpr.dev",
      });
      ctx.stack.addOutputs({
        url: ctx.app.stage === "dev" ? "http://localhost:3000" : site.url || "",
      });
    });
  },
} satisfies SSTConfig;
