import { Component } from '@angular/core';
import { CitiesService } from './services/cities.service';
import { City } from './models/city.interface';
import { WeatherService } from './services/weather.service';
import { CityWeather } from './models/weather.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {

    city!: City;
    citiesSuggested!: City[];
    cityWeather!: CityWeather | null;
    lastUpdate!: Date;
    myTimer: any;
    
    constructor(private citiesService: CitiesService, 
                private weatherService: WeatherService) {}

    public searchSuggestions(event: any) {
        this.citiesService.getCities(event.query)
            .subscribe(response => {
                this.citiesSuggested = response.map(city => {
                    city.nameFormated = city.name + ', ' + city.country;
                    return city;
                });
            })
        
    }

    private getWeather(cityId: number) {
        this.weatherService.getWeather(cityId)
            .subscribe(weatherResp => {
                this.cityWeather = weatherResp;
                this.lastUpdate = new Date();
                console.log("LAST UPDATE:", this.lastUpdate);
                this.setTimerToUpdateWeather(cityId);
            })
    }
    
    public searchWeather(city: City) {
        this.cityWeather = null;
        this.city = city;
        this.getWeather(city.id);
    }

    private setTimerToUpdateWeather(cityId: number) {
        if(this.myTimer)
            clearInterval(this.myTimer);

        this.myTimer = setInterval(this.getWeather.bind(this, cityId), 300000);
    }


}
