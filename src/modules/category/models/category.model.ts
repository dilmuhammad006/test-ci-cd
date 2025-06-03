import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Model, Table } from 'sequelize-typescript';

@ObjectType()
@Table({ tableName: 'categories', timestamps: true })
export class Category extends Model {
  @Field({})
  @Column({})
  name: string;

  @Field({})
  @Column({})
  description: string;

  @Field({})
  declare createdAt: string;

  @Field({})
  declare updatedAt: string;
}
