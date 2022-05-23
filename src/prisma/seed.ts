/* eslint-disable no-console */
import { prisma } from '../lib/prisma';

const todo = async () => {
  await prisma.todo.create({
    data: {
      title: 'This is a sample todo',
    },
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
