import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as ServerConfig from '../config/server-config.json';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string;
  constructor(private httpClient: HttpClient) {

    this.url = '';
    if (ServerConfig.Protocol != '') {
      this.url += ServerConfig.Protocol + "://";
    }
    if (ServerConfig.HostName != '') {
      this.url += ServerConfig.HostName;
    }
    if (ServerConfig.Port) {
      this.url += ":" + ServerConfig.Port;
    }

  }

  get(path: string): Observable<Object> {
    return this.httpClient.get(this.url + path);
  }

}
