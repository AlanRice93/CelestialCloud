import { createRequire as topLevelCreateRequire } from 'module';const require = topLevelCreateRequire(import.meta.url);
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// sst.config.ts
import { AstroSite } from "sst/constructs";
var sst_config_default = {
  config(_input) {
    return {
      name: "celestial-cloud",
      region: "us-east-1",
      profile: "ironbay-dev"
    };
  },
  stacks(app) {
    app.stack(/* @__PURE__ */ __name(function Site(ctx) {
      const site = new AstroSite(ctx.stack, "site");
      ctx.stack.addOutputs({
        url: site.url || "http://localhost:3000"
      });
    }, "Site"));
  }
};
export {
  sst_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3N0LmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHR5cGUgeyBTU1RDb25maWcgfSBmcm9tIFwic3N0XCJcbmltcG9ydCB7IEFzdHJvU2l0ZSB9IGZyb20gXCJzc3QvY29uc3RydWN0c1wiXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29uZmlnKF9pbnB1dCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBcImNlbGVzdGlhbC1jbG91ZFwiLFxuICAgICAgcmVnaW9uOiBcInVzLWVhc3QtMVwiLFxuICAgICAgcHJvZmlsZTogXCJpcm9uYmF5LWRldlwiLFxuICAgIH1cbiAgfSxcbiAgc3RhY2tzKGFwcCkge1xuICAgIGFwcC5zdGFjayhmdW5jdGlvbiBTaXRlKGN0eCkge1xuICAgICAgY29uc3Qgc2l0ZSA9IG5ldyBBc3Ryb1NpdGUoY3R4LnN0YWNrLCBcInNpdGVcIilcbiAgICAgIGN0eC5zdGFjay5hZGRPdXRwdXRzKHtcbiAgICAgICAgdXJsOiBzaXRlLnVybCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLFxuICAgICAgfSlcbiAgICB9KVxuICB9LFxufSBzYXRpc2ZpZXMgU1NUQ29uZmlnXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7OztBQUNBLFNBQVMsaUJBQWlCO0FBRTFCLElBQU8scUJBQVE7QUFBQSxFQUNiLE9BQU8sUUFBUTtBQUNiLFdBQU87QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTyxLQUFLO0FBQ1YsUUFBSSxNQUFNLGdDQUFTLEtBQUssS0FBSztBQUMzQixZQUFNLE9BQU8sSUFBSSxVQUFVLElBQUksT0FBTyxNQUFNO0FBQzVDLFVBQUksTUFBTSxXQUFXO0FBQUEsUUFDbkIsS0FBSyxLQUFLLE9BQU87QUFBQSxNQUNuQixDQUFDO0FBQUEsSUFDSCxHQUxVLE9BS1Q7QUFBQSxFQUNIO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
