// level 2
async function getUsers() {
  const [user, profile, posts] = await Promise.all(
    getUser(),
    getProfile(),
    getPosts()
  );

  return { user, profile, posts };
}
