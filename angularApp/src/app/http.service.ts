import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
    constructor(private _http: HttpClient){
    }

    getWeather(city){
        let string = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&APPID=e7d4586736152ce3f60dca599ec92b91';
        return this._http.get(string);
    }
}


