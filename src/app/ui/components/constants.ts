// utils/regex.ts
export const REGEX = {
  USERNAME: /[a-zA-Z0-9]{3,}/,
  EMAIL: /[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[a-z]{2,3}/,
  PASSWORD: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}/,
  CPF: /\d{3}\.\d{3}\.\d{3}\-\d{2}/,
  YOUTUBE_LINK: /^(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$/,
  INSTANCE_ID: /i\-[0-9a-f]{17}/,
  LINKEDIN_PROFILE_LINK: /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/,
  COMPANY_WEBSITE_LINK: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
  PHONE: /^\+(?:[0-9] ?){6,14}[0-9]$/,
};

// utils/validators.ts
// import { AbstractControl, ValidationErrors, ValidatorFn } from 'react-hook-form';

// export const matchPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
//   const password = control.get('password')?.value;
//   const confirmPassword = control.get('confirmPassword')?.value;
//   console.log(password, confirmPassword);

//   return password === confirmPassword ? null : { passwordsDoNotMatch: true };
// };

// constants/socketEvents.ts
export const SOCKET_EVENTS = {
  SEND_FOLLOW_REQUEST: 'SEND_FOLLOW_REQUEST',
  USER_JOIN: 'USER_JOIN',
  ACCEPT_REQUEST: 'ACCEPT_REQUEST',
  UPDATE_EVENT: 'UPDATE_EVENT',
  FETCH_TOTAL_COUNT: 'FETCH_TOTAL_COUNT',
  RECEIVE_TOTAL_COUNT: 'RECEIVE_TOTAL_COUNT',
  JOIN_CHAT_ROOM: 'JOIN_CHAT_ROOM',
  SEND_MESSAGE: 'SEND_MESSAGE',
  NEW_MESSAGE: 'NEW_MESSAGE',
  TOTAL_LIKES: 'TOTAL_LIKES',
} as const;

// constants/apiEndpoints.ts
export const APIS = {
  AUTH: {
    SIGN_UP: '/v1/user/register',
    SIGN_IN: '/v1/user/login',
    FORGOT_PASSWORD: '/v1/user/forgot-password',
    SOCIAL_LOGIN: '/v1/user/social-login',
  },
  MAIN: {
    LOGOUT: '/v1/user/logout',
    GET_USER_PROFILE: '/v1/user/profile',
    GET_USERS_FOR_FOLLOW: '/v1/user/follow-list',
    GET_NOTIFICATION_LIST: '/v1/notification/list',
    FILE_UPLOAD: '/v1/file-upload',
    GET_USERS_LIST_FOR_CHAT: '/v1/chat/users',
    GET_CONNECTIONS_LIST: '/v1/user/connections',
    START_MESSAGES: '/v1/chat/startMessage',
    GET_MESSAGES: '/v1/chat/messages',
  },
} as const;
