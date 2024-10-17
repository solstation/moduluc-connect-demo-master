export enum ProfileFields {
  NAME,
  LAST_NAME,
  BIO,
}

export interface ProfileData {
  bio: string;
  name: string;
  lastName: string;
  profilePrivateFields: any[];
}
