import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = 'c8766b706a68414f325a941a5ac7d066';
  URI: string =''

  constructor(private http: HttpClient) { 
    this.URI = `https://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey}&units=metric&q=`
  }

  getWeather(cityName: string, countryCode :string) {
    return this.http.get(`${this.URI}${cityName},${countryCode}`);
  }
}
