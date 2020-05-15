export interface IPage {
  id: number;
  pageName: string;
  imageName: string;
}

export interface IComment {
  id: number;
  pageid: number;
  name: string;
  content: string;
}
