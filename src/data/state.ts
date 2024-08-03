export interface InitialState {
  name: number;
  photo: string | null;
  photoData: Uint8ClampedArray | null;
}

export interface AppState extends InitialState {
  setName: (name: number) => void;
  setPhoto: (photo: string) => void;
  setPhotoData: (photoData: Uint8ClampedArray) => void;
}

export const initialState: InitialState = {
  name: 1,
  photo: null,
  photoData: null,
};
