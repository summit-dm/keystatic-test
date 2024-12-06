import { fields } from '@keystatic/core';

export const FrontPageSchema: any = 
{
  label: 'Home Page',
  slugField: '*',
  format: { contentField: 'content' },
  path: 'src/content/pages/frontPage',
  schema: {
    title: fields.slug({ name: { label: 'Home' } }),
    publishedDate: fields.date({ label: 'Published Date' }),
    content: fields.markdoc({ label: 'Body' })
  }
}