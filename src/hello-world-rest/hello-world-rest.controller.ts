import { Controller, Get } from '@nestjs/common';

@Controller('hello-world-rest')
export class HelloWorldRestController {

    @Get()
    getHelloWorld() {
        return {
            message: 'Hello World!'
        }
    }
    @Get("dice")
    getRandomNumber() {
        return {
            dice: Math.floor(Math.random() * 6) + 1
        }
    }
    
}
