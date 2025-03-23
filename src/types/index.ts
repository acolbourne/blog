export type Success<T> = {
  data: T;
  error: null;
};

export type Failure<E> = {
  data: null;
  error: E;
};

export type Result<T, E = Error> = Success<T> | Failure<E>;

export type ContactFormInputs = {
  formName: string;
  subject: string;
  access_key: string;
  name: string;
  email: string;
  message: string;
};
