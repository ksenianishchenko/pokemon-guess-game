export default interface IApiService {
  listItems(dispatch: any): void;
  getItemInfo(id: string, dispatch: any): void;
}