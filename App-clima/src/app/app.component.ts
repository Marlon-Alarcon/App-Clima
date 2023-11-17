import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  jsonData: any = [];
  selectedCountry: string = "";

  constructor(
    private weatherservice: WeatherService,
    private pais: WeatherService
  ){}


  ngOnInit(){
    this.weatherservice.getweather('riohacha','co').subscribe((data)=>{
      console.log(data,"Datos")
    },error => console.error(error))


    this.pais.getpaises().subscribe((data)=>{
      this.jsonData = data

      console.log(this.jsonData,"Toda la data")
    },error => console.error(error))
  }

  sendData(city:any,country:any){
    console.log(city.value)
    console.log(country.value)
    return false
  }
}
