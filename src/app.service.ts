import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
  printConfig() {
    console.log('Current config is: ', this.configService.get<string>('NODE_ENV'));
    return 'done';
  }
}
