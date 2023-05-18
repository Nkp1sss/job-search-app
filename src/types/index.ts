export type AuthType = {
  access_token: string;
  refresh_token: string;
  ttl: number;
  expires_in: number;
  token_type: string;
  reg_user_resumes_count: number;
};

export type CatalogType = {
  title: string;
  title_trimmed: string;
  key: number;
  // ... остальные поля пока не нужны
};

export type SelectType = {
  label: string;
  value: string;
};
