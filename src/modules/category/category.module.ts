import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './models';
import { CategoryService } from './category.service';
import { CategroyResolver } from './category.resolver';

@Module({
  imports: [SequelizeModule.forFeature([Category])],
  providers: [CategoryService, CategroyResolver],
})
export class CategoryModule {}
