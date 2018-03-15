import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

 	constructor(private _httpService: HttpService) { }

	ngOnInit() {
		this.getWeatherFromService("Seattle");
	}

	img = "https://images.pexels.com/photos/656195/pexels-photo-656195.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
	weather = {};

  	getWeatherFromService(city){
		let observable = this._httpService.getWeather(city);
		observable.subscribe(data => {
			console.log("Got data:", data)
			this.weather = data;
        });
    }

}
