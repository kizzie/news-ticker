import { Injectable } from '@nestjs/common';
import { news_story } from './model/news_story';

@Injectable()
export class AppService {

  story_list: Map<string, news_story>

  getHello(): string {
    return 'Hello World!';
  }

  getVersion(): string {
    return process.env.npm_package_version;
  }

  // should put this in a service / controller for handling 
  // the story list object rather than all in one file
  addNewStory(story: news_story): string {
    this.story_list[story.title] = story
    return "Stored in story list, new length: " + this.story_list.keys.length
  }

  getAllStories(): Map<string, news_story> {
    return this.story_list
  }

  getStoryByTitle(title: string): news_story {
    for (var s of this.story_list.values()) {
      console.log(s)
      if (s[title] == title) {
        return s
      }
    }
  }

  getStoryByID(id: string): news_story {
    return this.story_list[id]
  }
}
