import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DCComponent implements OnInit {

	constructor(private _httpService: HttpService) { }

	ngOnInit() {
		this.getWeatherFromService("Washington");
	}

	img = "https://images.pexels.com/photos/208702/pexels-photo-208702.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
	weather = {};

  	getWeatherFromService(city){
		let observable = this._httpService.getWeather(city);
		observable.subscribe(data => {
			console.log("Got data:", data)
			this.weather = data;
        });
    }

}
