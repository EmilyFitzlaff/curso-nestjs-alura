import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UniqueEmailValidation } from './validation/unique-email';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserRepository, UniqueEmailValidation],
})
export class UserModule {}
