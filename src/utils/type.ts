export interface UserProps {
  uid: string;
  displayName: string | null;
  displayPicture: string | null;
}

export type UserWithNull = null | UserProps;
