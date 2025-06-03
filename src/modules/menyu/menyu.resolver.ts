import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MenyuService } from './menyu.service';
import { CreateMenyuDto, UpdateMenyuDto } from './dtos';
import { Menyu } from './models';

@Resolver(() => Menyu)
export class MenyuResolver {
  constructor(private readonly service: MenyuService) {}

  @Query(() => [Menyu])
  async menus() {
    return await this.service.getAll();
  }

  @Query(() => Menyu)
  async menu(@Args('id', { type: () => Int }) id: number) {
    return await this.service.getOne(id);
  }

  @Mutation(() => Menyu)
  async create(@Args('CreateMenyuDto') payload: CreateMenyuDto) {
    return await this.service.create(payload);
  }

  @Query(() => Menyu)
  async delete(@Args('id', { type: () => Int }) id: number) {
    return await this.service.delete(id);
  }

  @Mutation(() => Menyu)
  async update(@Args('UpdateMenyuDto') payload: UpdateMenyuDto) {
    return await this.service.update(payload);
  }
}
