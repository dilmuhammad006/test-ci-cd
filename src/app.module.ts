import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SequelizeModule } from '@nestjs/sequelize';
import * as path from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { CategoryModule, MenyuModule } from './modules';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.join(process.cwd(), 'src', 'schemas.gql'),
      playground: false,
      debug: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),

    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'graphql',
      autoLoadModels: true,
      sync: {
        alter: true,
      },
    }),

    MenyuModule,
    CategoryModule,
  ],
})
export class AppModule {}
