/* eslint-disable no-console */
import { prisma } from '../lib/prisma';

const todo = async () => {
  await prisma.todo.createMany({
    data: [{ text: 'Todo 1 です' }, { text: 'Todo 2 です' }, { text: 'Todo 3 です' }],
  });
};

const seed = async () => {
  await prisma.todo.deleteMany({});
  await todo();
};

seed()
  .then(() => console.log('Seed success!'))
  .catch((e) => console.log(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
