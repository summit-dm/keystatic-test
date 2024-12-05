import { fields } from '@keystatic/core';

export const PostsSchema: any = 
  {
    label: 'Posts Schema',
    slugField: 'title',
    path: 'src/content/posts/*',
    format: { contentField: 'content' },
    schema: {
      title: fields.slug({ name: { label: 'Title' } }),
      image: fields.image({
        label: 'Main Image',
        directory: 'src/assets/images/posts',
        publicPath: '/src/assets/images/posts/',
      }),
      content: fields.markdoc({
        label: 'Content',
        options: {
          image: {
            directory: 'src/assets/images/posts',
            publicPath: '../../assets/images/posts/',
          },
        },
      }),
    },
  }




