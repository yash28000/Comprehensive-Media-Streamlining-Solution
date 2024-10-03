import { IVideo } from "../videos/videos.types";

export interface IUser{
    username: string;
    fullname: string;
    email: string;
    avatar: string;
    coverImage: string;
    watchHistory: IVideo[]
    createdAt: Date;
}
export type PartialUser = Pick<IUser, "username" | "email" | "avatar">;
export interface IPartialUser extends PartialUser {}