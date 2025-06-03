import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Model, Table } from 'sequelize-typescript';

@ObjectType()
@Table({ tableName: 'menyu', timestamps: true })
export class Menyu extends Model {
  @Field((type) => Int)
  @Column({ primaryKey: true, autoIncrement: true })
  declare id: number;

  @Field({})
  @Column({})
  name: string;

  @Field((type) => Int)
  @Column({})
  price: number;

  @Field({})
  declare createdAt: string;

  @Field({})
  declare updatedAt: string;
}
