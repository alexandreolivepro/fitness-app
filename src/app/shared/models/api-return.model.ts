export interface ApiReturn<T> {
  data: T;
  errors?: { messages: Messages[] };
}

type Severite = 'info' | 'alerte' | 'error';

export interface Messages {
  idAppliOrigine: string;
  code: string;
  severite: Severite;
  libelle: string;
  details?: string;
}
