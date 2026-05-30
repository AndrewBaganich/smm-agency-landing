import type { Block } from 'payload'

export const TeamBlock: Block = {
  slug: 'teamBlock',
  interfaceName: 'TeamBlock',
  labels: {
    singular: 'Team Block',
    plural: 'Team Blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'Команда',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Люди, які створюють контент',
    },
  ],
}
