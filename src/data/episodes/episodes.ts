import introductionMarkdown from './chapter-1/introduction.md?raw'
import type { Episode } from '../../types/episode'
import { parseArticleMarkdown } from '../../utils/articleMarkdown'

export const episodes: Episode[] = [
  {
    id: '1',
    title: 'The Dragon Takes Flight',
    description:
      'How the spatial decisions of the imperial era continue to shape contemporary Hanoi.',
    sections: [
      {
        id: 'introduction',
        number: 0,
        title: 'Introduction',
        blocks: parseArticleMarkdown(introductionMarkdown),
      },
    ],
  },
  {
    id: '2',
    description: 'Chapter two is being prepared.',
    sections: [{ id: 'introduction', number: 0, title: 'Introduction', blocks: [] }],
  },
  {
    id: '3',
    description: 'Chapter three is being prepared.',
    sections: [{ id: 'introduction', number: 0, title: 'Introduction', blocks: [] }],
  },
  {
    id: '4',
    description: 'Chapter four is being prepared.',
    sections: [{ id: 'introduction', number: 0, title: 'Introduction', blocks: [] }],
  },
]
