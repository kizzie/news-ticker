import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getVersion(): string {
    return process.env.npm_package_version;
  }
}
