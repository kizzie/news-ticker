import { Injectable } from '@nestjs/common';
import { news_story } from './model/news_story';

@Injectable()
export class AppService {
  story_list: news_story[] = []

  getHello(): string {
    return 'Hello World!';
  }

  getVersion(): string {
    return process.env.npm_package_version;
  }

  // should put this in a service / controller for handling 
  // the story list object rather than all in one file
  addNewStory(story: news_story): string {
    // because in typescript pushing to an array returns the length for us
    return this.story_list.push(story).toString()
  }

  getAllStories(): news_story[] {
    return this.story_list
  }

  getStoryByTitle(title: string): news_story[] {
    return this.story_list.filter(story => story.title == title)
  }

  getStoryByID(id: string): news_story[] {
    return this.story_list.filter(story => story.id == id)
  }
}
