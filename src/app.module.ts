import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './users/user.module';
import { ProductModule } from './products/product.module';

@Module({
  imports: [UserModule, ProductModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
