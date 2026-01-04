// Local definition to replace the missing 'types' file
export const PostCategory = {
  INNOVATION: 'Innovation',
  COMMUNITY: 'Community',
  NEWS: 'News'
};

export const posts = [
  {
    id: 'news1',
    title: 'Project Showcasing 2025, organized by the CSE & CSIT Department under the SMUCT Robotics & IoT Community, was successfully held today',
    date: '2025-12-10',
    author: 'SMUCT IoT Community',
    category: PostCategory.COMMUNITY,
    content: 'Project Showcasing 2025',
    images: ['/postimages/p2.jpeg', '/postimages/p1.jpeg'],
    isPinned: true,
    pinnedSerial: 2
  },
  {
    id: 'news2',
    title: 'Champion of Project Showcasing 2025',
    date: '2025-12-10',
    author: 'SMUCT IoT Community',
    category: PostCategory.COMMUNITY,
    content: '',
    images: ['/postimages/p1.jpeg'],
    source: 'google.com',
    isPinned: true,
    pinnedSerial: 1
  },
{
    id: 'news3',
    title: 'Check-out our new web site:',
    date: '2025-12-12',
    author: 'SMUCT IoT Community',
    category: PostCategory.COMMUNITY,
    content: 'We appreciate the work by @Nazmul Haque Fahad on updating the site ',
    images: ['/postimages/p3.png'],
    source: 'smuct-roi.github.io',
    isPinned: false,
    people: ['Nazmul Haque Fahad','MD. Naim']
  }

];