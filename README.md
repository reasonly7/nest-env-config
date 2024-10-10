# nest-env-config

The best practices for managing configurations in NestJS（NestJS 中管理配置的最佳实践）

Step 1: install @nestjs/config

```sh
$ pnpm i @nestjs/config
```

Step 2: import ConfigModule in `app.module.ts`

```ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({

  })],
  // ...
})
export class AppModule {}
```

Step 3: see 👀: [popular config]('./config')

![](./config-env-file.png)

