import type { StorybookConfig } from "@storybook/sveltekit";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|svelte)",
    "../node_modules/@LeMouf/package-svelte-csf/src/**/*.mdx",
    "../node_modules/@LeMouf/package-svelte-csf/src/**/*.stories.@(js|jsx|mjs|ts|tsx|svelte)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-svelte-csf",
  ],
  framework: {
    name: "@storybook/sveltekit",
    options: {},
  },
  docs: {
    docsMode: true
  }
};

export default config;
