import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class HelloWorldGraphqlResolver {

    @Query( () => String,{ name: "message"} )
    getHelloWorld(): string {
        return 'Hello World from Graphql!'; 

    }
    @Query(() => Number, { name: "randomDice" })
    getRandomNumber(): number {
        return Math.floor(Math.random() * 6) + 1;

    }
}
