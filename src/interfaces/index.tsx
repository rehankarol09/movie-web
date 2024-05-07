export interface Movie {
    poster_path: string;
    title: string;
    vote_average: number;
    id: string;
    release_date: string;
  }
  
  export interface LoginPayload {
    username:FormDataEntryValue | null,
    password:FormDataEntryValue | null
  }
