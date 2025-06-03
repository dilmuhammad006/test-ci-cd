import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Menyu } from './models';
import { MenyuResolver } from './menyu.resolver';
import { MenyuService } from './menyu.service';

@Module({
  imports: [SequelizeModule.forFeature([Menyu])],
  providers: [MenyuResolver, MenyuService],
})
export class MenyuModule {}
