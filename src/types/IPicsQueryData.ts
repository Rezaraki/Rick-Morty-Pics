import { IImageName } from './IImageName';

export interface IPicsQueryData {
  data: {
    characters: {
      results: IImageName[];
    };
  };
}
