import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './posts.entity';

@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query(() => [Post])
  posts() {
    return this.postsService.findAll();
  }

  @Query(() => Post)
  post(@Args('id') id: number) {
    return this.postsService.findOne(id);
  }

  @Mutation(() => Post)
  createPost(
    @Args('title') title: string,
    @Args('content', { nullable: true }) content?: string,
  ) {
    return this.postsService.create({ title, content });
  }

  @Mutation(() => Post)
  updatePost(
    @Args('id') id: number,
    @Args('title', { nullable: true }) title?: string,
    @Args('content', { nullable: true }) content?: string,
  ) {
    return this.postsService.update(id, { title, content });
  }

  @Mutation(() => Post)
  deletePost(@Args('id') id: number) {
    return this.postsService.delete(id);
  }
}
