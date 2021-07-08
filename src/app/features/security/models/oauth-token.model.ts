export interface OAuthToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  challengeName: string;
  error?: 'invalid_grant';
}

export enum OauthStorage {
  ACCESS_TOKEN = 'ACCESS_TOKEN',
}
