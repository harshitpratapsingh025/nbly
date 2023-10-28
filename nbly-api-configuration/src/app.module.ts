import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscountsModule } from './models/discounts/discounts.module';
import { UsersModule } from './models/users/users.module';
import { DiscountEntity } from './entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'poll_user',
      password: 'poll_password',
      database: 'poll_db',
      entities: [DiscountEntity],
      synchronize: true,
    }),
    DiscountsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
