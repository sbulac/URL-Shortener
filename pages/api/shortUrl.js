import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const { url } = req.body;
  const shortUrl = Math.random().toString(36).substr(2, 7);

  try {
    const data = await prisma.link.create({
      data: { url, shortUrl },
    });
    res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({ error });
  }
};
