export interface IUniversity{
    state_province: string | null;
    country: string;
    domains: string[];
    web_pages: string[];
    alpha_two_code: string;
    name: string;
    
}


export interface ICountry {
    id: number;
    sortname: string;
    name: string;
    phoneCode: number;
  }
  