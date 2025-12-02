import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {codeInput} from '@sanity/code-input'
import {table} from '@sanity/table'
import {markdownSchema} from 'sanity-plugin-markdown'
import { csvTablePlugin } from 'sanity-plugin-csv-table-input'; 
export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'orwj4dpz',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), codeInput(), table(), markdownSchema(), csvTablePlugin()],

  schema: {
    types: schemaTypes,
  },
})
