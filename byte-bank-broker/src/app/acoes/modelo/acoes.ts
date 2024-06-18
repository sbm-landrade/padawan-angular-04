export interface Acoes extends Array<Acao> {
  payload: Acoes;
}

export interface Acao {
  id: number;
  codigo: string;
  descricao: string;
  preco: number;
}

export interface AcoesAPI {
  payload: Acoes;
}
