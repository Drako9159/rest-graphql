import { Controller, Get } from '@nestjs/common';

@Controller('hello-world-rest')
export class HelloWorldRestController {

    @Get()
    getHello() {
        return {
            message: 'Hello World!'
        }
    }
}
