import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuhtController } from './auht/auht.controller';
import { Base1Module } from './base1/base1.module';
import { CartModule } from './cart/cart.module';
import { Cart2Controller } from './cart2/cart2.controller';
import { Cart2Module } from './cart2/cart2.module';
import { CatsController } from './cats/cats.controller';
import configuration from './config/configuration';
import { ProductModule } from './product/product.module';
import { Product2Module } from './product2/product2.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    CartModule,
    Cart2Module,
    ProductModule,
    Product2Module,
    Base1Module,
  ],
  controllers: [AppController, CatsController, AuhtController, Cart2Controller],
  providers: [AppService],
})
export class AppModule {}
