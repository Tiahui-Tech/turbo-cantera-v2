import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Post as PrismaPost, Prisma } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<PrismaPost[]> {
    return this.prisma.post.findMany();
  }

  findOne(id: number): Promise<PrismaPost | null> {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  create(data: Prisma.PostCreateInput): Promise<PrismaPost> {
    return this.prisma.post.create({
      data,
    });
  }

  update(id: number, data: Prisma.PostUpdateInput): Promise<PrismaPost> {
    return this.prisma.post.update({
      where: { id },
      data,
    });
  }

  delete(id: number): Promise<PrismaPost> {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
