import { IImageName } from './IImageName';

export interface IPicsQueryData {
  characters: {
    info: {
      count: number;
    };
    results: IImageName[];
  };
} 
 
