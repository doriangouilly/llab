import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({

  site: 'https://doriangouilly.github.io', 
  base: '/llab', 


  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [react(), mdx()],
});