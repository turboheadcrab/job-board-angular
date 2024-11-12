import { State } from '../../shared/model/state.model';

export function initializeState<T>(): State<T> {
  return {
    response: null,
    isLoaded: false,
    error: null,
  };
}
