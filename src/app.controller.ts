import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { news_story } from './model/news_story';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/version")
  getVersion(): string {
    return this.appService.getVersion();
  }

  @Post("/new_story")
  submitStory(@Body() body: news_story): string {
    console.log(body)
    return "<h1>" + body["title"] + "</h1>"
  }
}
