import type { Block } from 'payload'

export const AboutAgencyBlock: Block = {
  slug: 'aboutAgencyBlock',
  interfaceName: 'AboutAgencyBlock',
  labels: {
    singular: 'About Agency Block',
    plural: 'About Agency Blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'Про агенцію',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Створюємо контент, який хочеться дивитися.',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'stats',
      type: 'array',
      maxRows: 3,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
