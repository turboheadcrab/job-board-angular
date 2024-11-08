export interface State<T> {
  response: T | null;
  isLoaded: boolean;
  error: string | null;
}
