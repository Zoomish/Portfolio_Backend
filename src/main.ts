import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.enableCors()
    function aaa() {
        setInterval(async () => {
            await fetch('https://tg-bot-backend-61qy.onrender.com/loss')
        }, 1000 * 60)
    }
    await app.listen(process.env.PORT, () => aaa())
}
bootstrap()
