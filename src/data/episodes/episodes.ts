import chapter0of1 from './chapter-1/00-introduction.md?raw'
import chapter0of2 from './chapter-2/00-introduction.md?raw'
import chapter0of3 from './chapter-3/00-introduction.md?raw'
import chapter0of4 from './chapter-4/00-introduction.md?raw'

import chapter4of1 from './chapter-1/04-hanoi-nguyen.md?raw'

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
        blocks: parseArticleMarkdown(chapter0of1),
      },
      {
        id: 'foundations',
        number: 1,
        title: 'Foundations',
        blocks: parseArticleMarkdown('meme\n\nmeme\n\nmeme'),
      },
      {
        id: 'urban-form',
        number: 2,
        title: 'Urban Form',
        blocks: parseArticleMarkdown('meme\n\nmeme\n\nmeme\n\nmeme'),
      },
      {
        id: 'infrastructure',
        number: 3,
        title: 'Infrastructure',
        blocks: parseArticleMarkdown('meme\n\nmeme'),
      },
      {
        id: 'contemporary-afterlives',
        number: 4,
        title: 'HÀ NỘI: Nguyễn Dynasty (1802-1883)',
        blocks: parseArticleMarkdown(chapter4of1),
      },
    ],
  },
  {
    id: '2',
    description: 'Chapter two is being prepared.',
    sections: [
      {
        id: 'introduction',
        number: 0,
        title: 'Introduction',
        blocks: parseArticleMarkdown(chapter0of2),
      },
    ],
  },
  {
    id: '3',
    description: 'Chapter three is being prepared.',
    sections: [
      {
        id: 'introduction',
        number: 0,
        title: 'Introduction',
        blocks: parseArticleMarkdown(chapter0of3),
      },
      {
        id: 'foundations',
        number: 1,
        title: 'Foundations',
        blocks: parseArticleMarkdown('meme\n\nmeme\n\nmeme'),
      },
      {
        id: 'urban-form',
        number: 2,
        title: 'Urban Form',
        blocks: parseArticleMarkdown('meme\n\nmeme\n\nmeme\n\nmeme'),
      },
      {
        id: 'infrastructure',
        number: 3,
        title: 'Infrastructure',
        blocks: parseArticleMarkdown('meme\n\nmeme'),
      },
      {
        id: 'contemporary-afterlives',
        number: 4,
        title: 'Contemporary Afterlives',
        blocks: parseArticleMarkdown('meme\n\nmeme\n\nmeme'),
      },
    ],
  },
  {
    id: '4',
    description: 'Chapter four is being prepared.',
    sections: [
      {
        id: 'introduction',
        number: 0,
        title: 'Introduction',
        blocks: parseArticleMarkdown(chapter0of4),
      },
    ],
  },
]
