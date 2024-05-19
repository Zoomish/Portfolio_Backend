import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.enableCors()
    function aaa() {
        setInterval(async () => {
            await fetch(
                'https://portfolio-backend-ur7a.onrender.com/projects/AAA'
            )
        }, 1000 * 60 * 10)
    }
    await app.listen(process.env.PORT, () => aaa())
}
bootstrap()
