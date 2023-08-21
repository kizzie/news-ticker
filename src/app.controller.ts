import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { news_story } from './model/news_story';
import { version_response } from './model/version_response';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/version')
  getVersion(): version_response {
    return {
      version: this.appService.getVersion(),
    };
  }

  @Post('/new_story')
  submitStory(@Body() body: news_story): string {
    console.log(body);
    return '<h1>' + body['title'] + '</h1>';
  }

  @Get('/stories')
  allStories(): news_story[] {
    return [...this.appService.getAllStories().values()]
  }
}
