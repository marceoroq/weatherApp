import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityWeather } from '../models/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}
    
    public getWeather(cityId: number): Observable<CityWeather> {
        return this.http.get<CityWeather>(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=00d5f1ca2e55a49820921fa6ee193aa2&units=metric`)
    }
}
