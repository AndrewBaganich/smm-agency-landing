import type { Block } from 'payload'

export const PortfolioBlock: Block = {
  slug: 'portfolioBlock',
  interfaceName: 'PortfolioBlock',
  labels: {
    singular: 'Portfolio Block',
    plural: 'Portfolio Blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'Портфоліо',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Наші проєкти',
    },
  ],
}
