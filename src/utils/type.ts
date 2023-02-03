export interface UserProps {
   uid: string;
   displayName: string | null;
   displayPicture: string | null;
}

export type UserWithNull = null | UserProps;

export interface MessageProps {
   avatar: string | null;
   createdAt: Date;
   name: string;
   text: string;
   uid: string;
   id: string;
}

export interface GenericObject {
   [x: string]: any;
}