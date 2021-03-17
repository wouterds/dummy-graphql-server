import 'graphql-import-node/register';

import dotenv from 'dotenv';
import * as tsConfigPaths from 'tsconfig-paths';

import tsconfig from '../tsconfig.json';

dotenv.config();

tsConfigPaths.register({
  baseUrl: tsconfig.compilerOptions.baseUrl,
  paths: tsconfig.compilerOptions.paths,
});
