import { fields } from '@keystatic/core';

export const FrontPageSchema: any = 
{
  label: 'Home Page',
  slugField: '',
  format: { contentField: 'body' },
  path: 'src/content/*',
  schema: {
    title: fields.slug({ name: { label: 'Home' } }),
    publishedDate: fields.date({ label: 'Published Date' }),
    body: fields.markdoc({ label: 'Body' })
  }
}