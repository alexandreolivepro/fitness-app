export class FitUser {
  _id?: string;

  hasAccess?: boolean;

  username?: string;

  emailVerified?: boolean;

  firstname?: string;

  lastname?: string;

  locale?: string;

  role?: string;

  email?: string;
}

export type FitUserWithChallengeName = FitUser & { challengeName: string };

export type FitUserWithPassword = FitUser & { password: string };
