import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

export const requestBodySchema = z.object({
  formData: z.object({
    text: z.string().nonempty(),
  }),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const result = await prisma.todo.findMany({
      where: { isCompleted: false },
    });
    return res.status(200).json(result);
  }

  return res.status(404).json({ message: 'Not found' });
}
