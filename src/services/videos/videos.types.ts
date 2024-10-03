import { IPartialUser } from "../user/user.types";

export interface IVideo{
    title:string,
    description:string,
    videoFile:string,
    thumbnail?:string,
    views:number,
    isPublished:boolean,
    owner: string| IPartialUser,
    createdAt: Date,
    updatedAt: Date,
}