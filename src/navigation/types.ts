import { Routes } from './constants';

export type IStackParamsList = {
  [Routes.Login]: undefined;
  [Routes.Signup]: undefined;

  [Routes.MainTabs]: undefined;   // ⭐ main app container

  [Routes.Home]: undefined;
  [Routes.Profile]: undefined;
  [Routes.Chat]: undefined;
};