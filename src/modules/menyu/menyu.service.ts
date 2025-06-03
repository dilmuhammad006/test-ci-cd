import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Menyu } from './models';
import { CreateMenyuDto } from './dtos/create.menyu';
import { UpdateMenyuDto } from './dtos';

@Injectable()
export class MenyuService {
  constructor(@InjectModel(Menyu) private readonly menyuModel: typeof Menyu) {}

  async getAll() {
    const menyus = await this.menyuModel.findAll({ raw: true });

    console.log(menyus);
    return menyus;
  }

  async getOne(id: number) {
    const menyu = await this.menyuModel.findByPk(id, { raw: true });

    if (!menyu) {
      return {
        message: 'not found',
      };
    }
    return menyu;
  }

  async create(payload: CreateMenyuDto) {
    const menyu = await this.menyuModel.create({
      name: payload.name,
      price: payload.price,
    });

    return menyu.dataValues;
  }

  async delete(id: number) {
    const founded = await this.menyuModel.findByPk(id, { raw: true });

    if (!founded) {
      return {
        message: 'not found',
      };
    }

    await this.menyuModel.destroy({ where: { id } });

    return founded;
  }

  async update(payload: UpdateMenyuDto) {
    const founded = await this.menyuModel.findByPk(payload.id, { raw: true });

    if (!founded) {
      return {
        message: 'not found',
      };
    }

    const menyu = await this.menyuModel.update(
      { name: payload.name, price: payload.price },
      { where: { id: payload.id } },
    );

    return menyu;
  }
}
