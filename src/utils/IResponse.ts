export type IResponse<typeData> = {
  status: number;
  data?: typeData;
  error?: Error;
};

type Error = {
  code: number;
  msg: Object;
}