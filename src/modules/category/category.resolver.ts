import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Category } from './models';
import { CategoryService } from './category.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dtos';

@Resolver(() => Category)
export class CategroyResolver {
  constructor(private readonly service: CategoryService) {}

  @Query(() => [Category])
  async categories() {
    return await this.service.getAll();
  }

  @Query(() => Category)
  async category(@Args('id', { type: () => Int }) id: number) {
    return await this.service.getOne(id);
  }

  @Mutation(() => Category)
  async create(@Args('CreateCategoryDto') payload: CreateCategoryDto) {
    return await this.service.create(payload);
  }

  @Mutation(() => Category)
  async update(@Args('UpdateCategoryDto') payload: UpdateCategoryDto) {
    return await this.service.update(payload);
  }

  @Query(() => Category)
  async delete(@Args('id', { type: () => Int }) id: number) {
    return await this.service.delete(id);
  }
}
