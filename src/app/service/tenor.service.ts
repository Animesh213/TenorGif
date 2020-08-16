import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TenorService {
  constructor(private http: HttpClient) { }

  // The data fetech service 
  getTenorData(): any {
    return this.http.get(environment.api_url +`v1/trending?key=LIVDSRZULELA`);
  }

  // the Autofill fetech service
  getAutoFillSuggestion(keyword): any {
    return this.http.get(environment.api_url + `v1/autocomplete?platform=web&key=JJHDC7UK73EH&locale=en&anonid=MTkyNjEzNjg2OA&tag=${keyword}&type=trending`);
  }

  //the search fetch service
  getSearchGif(item): any {
    return this.http.get(environment.api_url +`v1/search?key=UMH7AAOIAOP3&tag=` + item);
  }
}
