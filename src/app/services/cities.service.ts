import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city.interface';

@Injectable({
    providedIn: 'root',
})
export class CitiesService {

    constructor(private http: HttpClient) {}
    
    public getCities(query: string): Observable<City[]> {
        return this.http.get<City[]>(`http://localhost:3000/cities/?name_like=^${query}&_order=asc&_sort=name&_limit=10`)
    }
}
