import {create} from 'zustand';

const useStore = create(set => ({
  music: [],
  setMusic: music => set(state => ({...state, music})),
  removeAllBears: () => set({bears: 0}),
}));

export default useStore;
