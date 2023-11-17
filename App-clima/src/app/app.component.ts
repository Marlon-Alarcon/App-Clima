import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  jsonData: any = [];
  clima: any;
  selectedCountry: string = "";
  espera: boolean = false;

  constructor(
    private weatherservice: WeatherService,
    private pais: WeatherService
  ){}


  ngOnInit(){

    this.pais.getpaises().subscribe((data)=>{
      this.jsonData = data

      console.log(this.jsonData,"Toda la data")
    },error => console.error(error))
  }


  getclima(city:string, country:string){

    this.weatherservice.getweather(city,country).subscribe((data)=>{
      this.clima = data
      console.log(data,"Datos")

      this.espera===true
    },error => console.error(error))

    
  }

  sendData(city:HTMLInputElement, country:HTMLSelectElement){
    // console.log(city.value)
    // console.log(country.value)
    this.getclima(city.value, country.value)

    if(this.espera !== true){
      city.value = ""
      country.value = ""
    }

    return false
  }
}
