<script context="module" lang="ts">
  import ButtonSvelte from './ButtonSvelte.svelte';

  export const meta = {
    title: "Repo/addon-svelte-csf/Button",
    component: ButtonSvelte,
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
      },
    },
    args: {
      label: 'Button',
    },
  }
</script>

<script>
  import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <ButtonSvelte {...args}/>
</Template>

<Story name="Primary" args={{
    primary: true,
  }}
/>

<Story name="Secondary"/>

<Story name="Large" args={{
    size: 'large',
  }}
/>

<Story name="Small" args={{
    size: 'small',
  }}
/>
