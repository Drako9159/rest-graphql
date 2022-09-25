import { Module } from '@nestjs/common';
import { HelloWorldRestModule } from './hello-world-rest/hello-world-rest.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { HelloWorldGraphqlModule } from './hello-world-graphql/hello-world-graphql.module';

@Module({
  imports: [HelloWorldRestModule,
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    playground: false,
    autoSchemaFile: join( process.cwd(), 'src/schema.gql'),
    plugins: [
      ApolloServerPluginLandingPageLocalDefault({}),
    ],
  
  }),

  HelloWorldGraphqlModule,
  ],
  
  controllers: [],
  providers: [],

})
export class AppModule {}
