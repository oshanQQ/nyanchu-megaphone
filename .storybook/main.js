module.exports = {
  typescript: { reactDocgen: false },
  stories: ["../components/**/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  babel: async (options) => ({
    ...options,
    presets: [...options.presets, "@emotion/babel-preset-css-prop"],
  }),
};
