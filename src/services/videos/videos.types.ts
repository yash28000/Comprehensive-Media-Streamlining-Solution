import { IPartialUser } from "../user/user.types";

export interface IVideo {
  _id: string;
  title: string;
  description: string;
  videoFile: string;
  thumbnail?: string;
  views: number;
  isPublished: boolean;
  owner: string | IPartialUser;
  createdAt: Date;
  updatedAt: Date;
}

export interface IMetaVideoStore {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}
