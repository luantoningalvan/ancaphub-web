import { getUsers } from '../../../api/users';

export default async (handle) => {
  const response = await getUsers();

  const actualData = [];

  response.data.forEach((item) => {
    actualData.push({
      name: item.user.name,
      avatar:
        item.user.avatar ||
        'https://api.adorable.io/avatars/40/random@ancaphub.com.png',
      link: `/${item.user.username}`,
      username: item.user.username,
    });
  });

  return actualData.filter(
    (user) => user.name.match(handle) || user.username.match(handle)
  );
};
