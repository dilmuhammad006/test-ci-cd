import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Category } from 'src/modules/category';

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

  @Field(() => Int)
  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER })
  categordId: number;

  @BelongsTo(() => Category)
  catergory: Category;
}
