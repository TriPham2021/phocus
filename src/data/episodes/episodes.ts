import introductionMarkdown from './chapter-1/01-introduction.md?raw'
import chapter2IntroductionMarkdown from './chapter-2/introduction.md?raw'
import chapter3IntroductionMarkdown from './chapter-3/introduction.md?raw'
import chapter4IntroductionMarkdown from './chapter-4/introduction.md?raw'

import chapter1o4 from './chapter-1/04-hanoi-nguyen.md?raw'

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
        blocks: parseArticleMarkdown(chapter1o4),
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
        blocks: parseArticleMarkdown(chapter2IntroductionMarkdown),
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
        blocks: parseArticleMarkdown(chapter3IntroductionMarkdown),
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
        blocks: parseArticleMarkdown(chapter4IntroductionMarkdown),
      },
    ],
  },
]
