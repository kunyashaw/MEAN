import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MyHttpService {
    constructor(private httpClient: HttpClient) { }

    sendGetRequest(url) {
        return this.httpClient.get(url)
    }
    sendPostRequest(url, data) {
        return this.httpClient.post(url, data)
    }

}