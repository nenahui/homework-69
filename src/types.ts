export interface Complete {
  value: string;
  key: number;
}

export interface ApiShow {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  status: number;
}

export interface ApiShows {
  show: ApiShow;
}
