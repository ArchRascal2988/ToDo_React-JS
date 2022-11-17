const db = require('../config/connection');
const { Todo, User } = require('../models');

db.once('open', async () => {
  await Todo.deleteMany({});
  await User.deleteMany({});

  const user= await User.create({
    username: 'testUser',
    password: 'TestPassword'
  });

  await Todo.insertMany([
    {
        task: 'testTask 1',
        description: 'test',
        userId: user._id
    },
    {
        task: 'testTask 2',
        description: '',
        userId: user._id
    },
    {
        task: 'testTask 3',
        description: 'test',
        userId: user._id
    }
  ]);

  console.log('Seeded!');
  process.exit(0);
});
