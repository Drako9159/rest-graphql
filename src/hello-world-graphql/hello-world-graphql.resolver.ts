import { Resolver, Query, Int, Args } from '@nestjs/graphql';
import {getRandomNumber} from "../common/helpers/get-random-number"

@Resolver()
export class HelloWorldGraphqlResolver {

    @Query( () => String,{ name: "message"} )
    getHelloWorld(): string {
        return 'Hello World from Graphql!'; 

    }
    @Query(() => Int, { name: "randomDice", description: "Este campo retorna un numero" })
    getRandomNumber(
        @Args("max") max: number = 6
    ): number {
        return getRandomNumber(max);

    }
}
