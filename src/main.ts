import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  
  // var appService: AppService = new AppService()
  // appService.story_list = [new news_story('a', 'b', 'c', 'd'), new news_story('1', '2', '3', '4')]
  // appService.addNewStory(new news_story('alpha', 'beta', 'gamma', 'delta'))

  // console.log(appService.getAllStories())
  // console.log(appService.getStoryByTitle('2'))

  // var l = [new news_story('a', 'b', 'c', 'd'), new news_story('1', '2', '3', '4')]
  

  // console.log(l.filter(story => story.title == "b"))
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
