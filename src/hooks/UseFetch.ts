import {useEffect, useReducer, useRef} from 'react';
import {API_URL, API_KEY, API_HOST} from '@env';

// console.log(API_URL, API_KEY, API_HOST);

interface State<T> {
  data?: T;
  error?: Error;
}

type Cache<T> = {[endpoint: string]: T};

// const API_URL = 'https://shazam.p.rapidapi.com';
// const API_KEY = 'f69a77c58amsh3e82ea6b89ea77ap15dd27jsndf06105a4a90';
// const API_HOST = 'shazam.p.rapidapi.com';

// discriminated union type
type Action<T> =
  | {type: 'loading'}
  | {type: 'fetched'; payload: T}
  | {type: 'error'; payload: Error};

function UseFetch<T = unknown>(
  endpoint?: string,
  query?: RequestInit,
): State<T> {
  const cache = useRef<Cache<T>>({});

  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef<boolean>(false);

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
  };

  // Keep state logic separated
  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return {...initialState};
      case 'fetched':
        return {...initialState, data: action.payload};
      case 'error':
        return {...initialState, error: action.payload};
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);
  useEffect(() => {
    // Do nothing if the endpoint is not given
    if (!endpoint) return;

    cancelRequest.current = false;

    const fetchData = async () => {
      dispatch({type: 'loading'});

      // If a cache exists for this endpoint, return it
      if (cache.current[endpoint]) {
        dispatch({type: 'fetched', payload: cache.current[endpoint]});
        return;
      }

      try {
        // const response = await fetch(endpoint, options);
        const options = {
          method: 'GET',
          url: `${API_URL}${endpoint}`,
          headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST,
          },
          params: {...query},
        };

        const response = await fetch(options.url, options);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = (await response.json()) as T;
        cache.current[endpoint] = data;
        if (cancelRequest.current) return;

        dispatch({type: 'fetched', payload: data});
      } catch (error) {
        if (cancelRequest.current) return;

        dispatch({type: 'error', payload: error as Error});
      }
    };

    void fetchData();

    // Use the cleanup function for avoiding a possibly...
    // ...state update after the component was unmounted
    return () => {
      cancelRequest.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  return state;
}

export default UseFetch;
