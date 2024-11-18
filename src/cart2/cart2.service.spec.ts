import { Test, TestingModule } from '@nestjs/testing';
import { Cart2Service } from './cart2.service';

describe('Cart2Service', () => {
  let service: Cart2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Cart2Service],
    }).compile();

    service = module.get<Cart2Service>(Cart2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
