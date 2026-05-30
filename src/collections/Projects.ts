import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slugField(),
    {
      name: 'client',
      type: 'text',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Ресторан', value: 'restaurant' },
        { label: 'Бренд', value: 'brand' },
        { label: 'Освіта', value: 'education' },
        { label: 'Особистий бренд', value: 'personal-brand' },
        { label: 'Інше', value: 'other' },
      ],
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'instagramUrl',
      type: 'text',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
