import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private http: HttpClient) { }

  apiLink = "http://127.0.0.1:5000/translate"

  getTranslation(language: string, text: string): Observable<any> {
    return this.http.get(`${this.apiLink}/${language}/${text}`)
  }
}
