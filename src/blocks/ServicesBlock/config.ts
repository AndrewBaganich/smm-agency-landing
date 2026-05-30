import type { Block } from 'payload'

export const ServicesBlock: Block = {
  slug: 'servicesBlock',
  interfaceName: 'ServicesBlock',
  labels: {
    singular: 'Services Block',
    plural: 'Services Blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'Послуги',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Що ми робимо',
    },
  ],
}
