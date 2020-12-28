import { Service, NedbServiceOptions } from 'feathers-nedb';
import { Application } from '../../declarations';
import { Params } from '@feathersjs/feathers';

interface TopicData {
  _id?: string;
  text: string;
}

export class Topics extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<NedbServiceOptions>, app: Application) {
    super(options);
  }
  create (data: TopicData, params?: Params) {
    const { text } = data;
  
    const topicData = {
      text
    };
  
    return super.create(topicData, params);
  }
};

