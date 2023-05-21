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

export type VacanciesType = {
  objects: VacancyType[];
  total: number;
  more: boolean;
};

export type VacancyType = {
  id: number;
  payment_from: number;
  payment_to: number;
  profession: string;
  town: {
    id: number;
    title: string;
  };
  type_of_work: {
    id: number;
    title: string;
  };
};
