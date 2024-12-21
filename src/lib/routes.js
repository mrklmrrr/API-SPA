export const routes = {
  home: "/",
  users: {
    root: "users",
    user: {
      base: "/users/:id",
      create: (id) => `/users/${id}`,
    },
  },
  albums: {
    root: "albums",
    album: {
      base: "/albums/:id",
      create: (id) => `/albums/${id}`,
    },
  },
};
