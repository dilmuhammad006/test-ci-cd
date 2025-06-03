import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './models';
import { CreateCategoryDto, UpdateCategoryDto } from './dtos';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category) private readonly categoryModel: typeof Category,
  ) {}

  async getAll() {
    const categories = await this.categoryModel.findAll({ raw: true });

    return await categories;
  }

  async getOne(id: number) {
    const founded = await this.categoryModel.findByPk(id);

    if (!founded) {
      throw new NotFoundException('Category not found');
    }

    return await founded.dataValues;
  }

  async create(payload: CreateCategoryDto) {
    const founded = await this.categoryModel.findOne({
      where: { name: payload.name },
    });

    if (founded) {
      throw new ConflictException('Category already existsX');
    }

    const category = await this.categoryModel.create({
      name: payload.name,
      description: payload.description,
    });

    return await category.dataValues;
  }

  async update(payload: UpdateCategoryDto) {
    const founded = await this.categoryModel.findByPk(payload.id);
    if (!founded) {
      throw new NotFoundException('Category not found');
    }

    await this.categoryModel.update(
      { name: payload.name, description: payload.description },
      { where: { id: payload.id } },
    );
    const category = await this.categoryModel.findByPk(payload.id);

    return await category?.dataValues;
  }

  async delete(id: number) {
    const founded = await this.categoryModel.findByPk(id);

    if (!founded) {
      throw new NotFoundException('Category not found');
    }

    await this.categoryModel.destroy({ where: { id } });

    return await founded.dataValues;
  }
}
