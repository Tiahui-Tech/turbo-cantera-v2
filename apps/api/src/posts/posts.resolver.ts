import { Query, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './posts.entity';

@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query(() => [Post])
  posts() {
    return this.postsService.findAll();
  }
}
