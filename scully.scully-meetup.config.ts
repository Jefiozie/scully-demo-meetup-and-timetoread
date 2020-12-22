import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import 'scully-plugin-meetup';
import { timeToRead, timeToReadOptions } from 'scully-plugin-time-to-read'
setPluginConfig(timeToRead, {
  path: '/blog'
} as timeToReadOptions);

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "scully-meetup",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
    '/talk/:talkid': {
      type: 'meetup',
      talkid: {
        name: 'Dutch-Angular-Group',
        property: 'id',
        amount: 5,
        status: `past,upcoming`,
      },
    }
  }
}