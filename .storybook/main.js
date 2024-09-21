const path = require("path");

const config = {
  stories: ["../**/*.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
  directory: "../",
  files: "**/*.@(mdx|stories.@(js|jsx|ts|tsx))",
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [
      path.resolve(__dirname, "..", "app/component"),
      "node_modules",
    ];

    return config;
  },
  staticDirs: ["../public"],  // Updated to use forward slashes
};

export default config;
