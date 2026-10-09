import chapter1of1 from './chapter-1/01-introduction.md?raw'
import chapter2of1 from './chapter-1/02-ly-tran.md?raw'
import chapter3of1 from './chapter-1/03-le-trinh.md?raw'
import chapter4of1 from './chapter-1/04-hanoi-nguyen.md?raw'
import chapter5of1 from './chapter-1/05-impact.md?raw'
import chapter6of1 from './chapter-1/06-subchapter-6.md?raw'
import chapter7of1 from './chapter-1/07-bibliography.md?raw'
import chapter1Image1 from '../../assets/images/chapter-1/subchapter-1/1-1-1.jpg'
import chapter1Image2 from '../../assets/images/chapter-1/subchapter-1/1-1-2.jpg'
import chapter2Image1 from '../../assets/images/chapter-1/subchapter-2/1-2-1.jpg'
import chapter2Image2 from '../../assets/images/chapter-1/subchapter-2/1-2-2.jpg'
import chapter3Image1 from '../../assets/images/chapter-1/subchapter-3/1-3-1.jpg'
import chapter3Image2 from '../../assets/images/chapter-1/subchapter-3/1-3-2.jpg'
import chapter4Image1 from '../../assets/images/chapter-1/subchapter-4/1-4-1.jpg'
import chapter4Image2 from '../../assets/images/chapter-1/subchapter-4/1-4-2.jpg'
import chapter5Image1 from '../../assets/images/chapter-1/subchapter-5/1-5-1.jpg'
import chapter5Image2 from '../../assets/images/chapter-1/subchapter-5/1-5-2.jpg'
import chapter6Image1 from '../../assets/images/chapter-1/subchapter-6/1-6-1.jpg'
import chapter6Image2 from '../../assets/images/chapter-1/subchapter-6/1-6-2.jpg'

import chapter1of2 from './chapter-2/01-introduction.md?raw'
import chapter1of3 from './chapter-3/01-introduction.md?raw'
import chapter1of4 from './chapter-4/01-introduction.md?raw'

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
        number: 1,
        title: 'Introduction',
        blocks: parseArticleMarkdown(chapter1of1),
        images: [
          {
            src: chapter1Image1,
            alt: 'Hang Bac Street, Hanoi',
            caption: 'Hang Bac Street, Hanoi',
          },
          {
            src: chapter1Image2,
            alt: 'Ngu Giap Communal House on Hang Cot Street, Hanoi',
            caption: 'Ngu Giap Communal House, Hang Cot Street, Hanoi',
          },
        ],
      },
      {
        id: 'foundations',
        number: 2,
        title: 'THĂNG LONG: Lý & Trần Dynasties (1010-1400)',
        blocks: parseArticleMarkdown(chapter2of1),
        images: [
          {
            src: chapter2Image1,
            alt: 'Ceramic architectural fragments in Hanoi',
            caption: 'Ceramic architectural fragments, Hanoi',
          },
          {
            src: chapter2Image2,
            alt: 'Carved dragon medallion in Hanoi',
            caption: 'Carved dragon medallion, Hanoi',
          },
        ],
      },
      {
        id: 'urban-form',
        number: 3,
        title: 'ĐÔNG KINH/KẺ CHỢ: Later Lê Dynasty (1407-1788)',
        blocks: parseArticleMarkdown(chapter3of1),
        images: [
          {
            src: chapter3Image1,
            alt: 'Gate at the Temple of Literature, Hanoi',
            caption: 'Temple of Literature, Hanoi',
          },
          {
            src: chapter3Image2,
            alt: 'Stone dragon stairway in Hanoi',
            caption: 'Stone dragon stairway, Hanoi',
          },
        ],
      },
      {
        id: 'infrastructure',
        number: 4,
        title: 'HÀ NỘI: Nguyễn Dynasty (1802-1883)',
        blocks: parseArticleMarkdown(chapter4of1),
        images: [
          {
            src: chapter4Image1,
            alt: 'North Gate of the Hanoi Citadel',
            caption: 'North Gate, Hanoi Citadel',
          },
          {
            src: chapter4Image2,
            alt: 'Hanoi Flag Tower',
            caption: 'Hanoi Flag Tower',
          },
        ],
      },
      {
        id: 'contemporary-afterlives',
        number: 5,
        title: 'Modern-day Impact',
        blocks: parseArticleMarkdown(chapter5of1),
        images: [
          {
            src: chapter5Image1,
            alt: 'Turtle Tower on Hoan Kiem Lake, Hanoi',
            caption: 'Turtle Tower, Hoan Kiem Lake, Hanoi',
          },
          {
            src: chapter5Image2,
            alt: 'Street corner in Hanoi Old Quarter',
            caption: 'Old Quarter street corner, Hanoi',
          },
        ],
      },
      {
        id: 'subchapter-6',
        number: 6,
        title: 'Conclusion',
        blocks: parseArticleMarkdown(chapter6of1),
        images: [
          {
            src: chapter6Image1,
            alt: 'Lantern shop on Hang Ma Street, Hanoi',
            caption: 'Lantern shop, Hang Ma Street, Hanoi',
          },
          {
            src: chapter6Image2,
            alt: 'Flooded riverside landscape in Hanoi',
            caption: 'Flooded riverside landscape, Hanoi',
          },
        ],
      },
      {
        id: 'bibliography',
        number: 7,
        title: 'Bibliography',
        blocks: parseArticleMarkdown(chapter7of1),
        kind: 'bibliography',
      },
    ],
  },
  {
    id: '2',
    description: 'Chapter two is being prepared.',
    sections: [
      {
        id: 'introduction',
        number: 1,
        title: 'Introduction',
        blocks: parseArticleMarkdown(chapter1of2),
      },
    ],
  },
  {
    id: '3',
    description: 'Chapter three is being prepared.',
    sections: [
      {
        id: 'introduction',
        number: 1,
        title: 'Introduction',
        blocks: parseArticleMarkdown(chapter1of3),
      },
      {
        id: 'foundations',
        number: 2,
        title: 'Foundations',
        blocks: parseArticleMarkdown('meme\n\nmeme\n\nmeme'),
      },
      {
        id: 'urban-form',
        number: 3,
        title: 'Urban Form',
        blocks: parseArticleMarkdown('meme\n\nmeme\n\nmeme\n\nmeme'),
      },
      {
        id: 'infrastructure',
        number: 4,
        title: 'Infrastructure',
        blocks: parseArticleMarkdown('meme\n\nmeme'),
      },
      {
        id: 'contemporary-afterlives',
        number: 5,
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
        number: 1,
        title: 'Introduction',
        blocks: parseArticleMarkdown(chapter1of4),
      },
    ],
  },
]
