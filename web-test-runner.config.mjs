import { playwrightLauncher } from '@web/test-runner-playwright';
import { esbuildPlugin } from '@web/dev-server-esbuild'; // <= named import に修正

export default {
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
    playwrightLauncher({ product: 'firefox' }),
    playwrightLauncher({ product: 'webkit' })
  ],
  files: './src/**/*.test.ts',
  nodeResolve: true,
  mimeTypes: {
    '**/*.ts': 'application/javascript',
  },
  plugins: [
    esbuildPlugin({ ts: true }) // <= named import に合わせて修正
  ],
  watch: true,
  testFramework: {
    config: {
      ui: 'bdd',
      timeout: '10000',
    },
  },
};