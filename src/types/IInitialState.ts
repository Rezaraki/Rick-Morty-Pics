import { IImageName } from './IImageName';

export interface IInitialState {
  value: number;
  pics: {
    count: number;
    status: 'loading' | 'succeeded' | 'failed' | null;
    images: IImageName[];
  };
}
