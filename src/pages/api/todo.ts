import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

export const requestBodySchema = z.object({
  formData: z.object({
    text: z.string().nonempty(),
  }),
});

const getTodoList = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await prisma.todo.findMany({
    where: { isDeleted: false },
  });
  return res.status(200).json(result);
};

const createTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await prisma.todo.create({
    data: {
      text: req.body.formData.text,
    },
  });
  return res.status(200).json(result);
};

const removeTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await prisma.todo.update({
    where: { id: Number(req.query.id) },
    data: { isDeleted: true },
  });
  return res.status(200).json(result);
};

const completeTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await prisma.todo.update({
    where: { id: Number(req.query.id) },
    data: { isCompleted: req.body.isCompleted ? false : true },
  });
  return res.status(200).json(result);
};

const updateTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await prisma.todo.update({
    where: { id: Number(req.query.id) },
    data: { text: req.body.formData.text },
  });
  return res.status(200).json(result);
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getTodoList(req, res);
    case 'POST':
      return createTodo(req, res);
    case 'PUT':
      const { type } = req.body;
      if (type == 'remove') return removeTodo(req, res);
      if (type === 'complete') return completeTodo(req, res);
      if (type == 'update') return updateTodo(req, res);
      return res.status(404).json({ message: 'エラー。クエリタイプが入力されていません。' });
  }

  return res.status(404).json({ message: 'Not found' });
}
