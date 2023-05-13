db.createUser({
  roles: [
    {
      role: 'readWrtie',
      db: 'food-square-db',
    },
  ],
});
