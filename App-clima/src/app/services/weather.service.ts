import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  URL: string = ''

constructor(private httpclient : HttpClient) { 
  this.URL = ""
}

}
