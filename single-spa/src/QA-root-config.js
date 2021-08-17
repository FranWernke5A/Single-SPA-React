import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@QA/react-single",
  app: () =>
    System.import(
      "@QA/react-single"
    ),
  activeWhen: (location) => location.pathname === "/react-single",
});

registerApplication({
  name: "@QA/react-multiples",
  app: () =>
    System.import(
      "@QA/react-multiples"
    ),
  activeWhen: (location) => ["react-multiples"],
});

registerApplication({
  name: "@QA/react-shell",
  app: () =>
    System.import(
      "@QA/react-shell"
    ),
  activeWhen: (location) => location.pathname === "/react-shell",
});

start({
  urlRerouteOnly: true,
});
