import { Component, OnInit } from '@angular/core';
import { AppSettings } from './settings/app.settings';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'List of users!';
    users = [];

    constructor(private http: Http){
        this.http = http;

        this.http.get(AppSettings.API_ENDPOINT + '/users')
            .subscribe(
                res => {
                    this.users = res.json();
                    console.log(this.users);
                }, //For Success Response
                err => console.error(err) //For Error Response
            );
    }
}
