import { Controller, Get, Query, ParseIntPipe} from '@nestjs/common';
import { getRandomNumber } from '../common/helpers/get-random-number';

@Controller('hello-world-rest')
export class HelloWorldRestController {

    @Get()
    getHelloWorld() {
        return {
            message: 'Hello World!'
        }
    }
    @Get("dice")
    getRandomNumber(
        @Query("max", ParseIntPipe) max: number,
    ): number {
        console.log({
            max,
            unNumeroDeVerdad: 10
        }
            )
        return getRandomNumber(max)
    }

    
}
