import { config, fields, collection, singleton } from '@keystatic/core';
import { PostsSchema } from './src/keystatic/collections/Posts';
import { SettingsSchema } from './src/keystatic/singletons/Settings';
import { FrontPageSchema } from './src/keystatic/singletons/FrontPage';

// console.log(PostsSchema)
export default config({
  storage: {
    // kind: 'local',
    kind: 'github',
    repo: {
      owner: 'summit-dm',
      name: 'keystatic-test',
    }
  },
  ui: {
    brand: { 
      name: 'Company Name',
      // mark: ({ colorScheme }) => {
      //   let path = colorScheme === 'dark'
      //     ? '//your-brand.com/path/to/dark-logo.png'
      //     : '//your-brand.com/path/to/light-logo.png';
        
      //   return '<img src={path} height={24} />'
      // },
    },
    navigation: {
      'Content': ['frontPage', 'posts'],
      'Settings': ['settings'],
    },
  },
  collections: {
    posts: collection(PostsSchema),
  },
  singletons: {
    settings: singleton(SettingsSchema),
    // frontPage: singleton(FrontPageSchema),
  }
});

// console.log("config-> ", config)
