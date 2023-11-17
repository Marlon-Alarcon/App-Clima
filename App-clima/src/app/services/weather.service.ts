import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  URL: string = ''
  key = '0c4979dd6605b4e2c2fbddedb517ddc5'

constructor(private httpclient : HttpClient) { 
  this.URL = `https://api.openweathermap.org/data/2.5/weather?appid=${this.key}`
}

getweather(ciudad:string, pais:string){
  
  return this.httpclient.get(`${this.URL}&q=${ciudad},${pais}`)

}

getpaises(){
  return this.httpclient.get<any[]>('assets/json/JsonPaises.json');
}

}
