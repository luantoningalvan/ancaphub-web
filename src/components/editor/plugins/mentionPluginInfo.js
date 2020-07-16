import MentionComponent from 'draft-js-mention-plugin/lib/Mention';
import { searchMention } from '../../../api/search';

export default async (handle) => {
  const response = await searchMention(handle);

  const formattedUsers = [];

  response.data.data.forEach((item) => {
    formattedUsers.push({
      name: item.name,
      avatar:
        item.avatar ||
        'https://api.adorable.io/avatars/40/random@ancaphub.com.png',
      link: `/${item.username}`,
      username: item.username,
    });
  });

  return formattedUsers;
};

export const mentionPluginOptions = {
  decorators: [
    {
      component: MentionComponent,
    },
  ],
};
