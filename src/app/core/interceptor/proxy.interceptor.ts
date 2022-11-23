import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfigService } from '../app/app-config.service';
import { ServerHostMap } from '../app/app-config';


@Injectable()
export class ProxyInterceptor implements HttpInterceptor {
  private readonly PATH_API_REGEX = /[a-z]+$/;
	private readonly PATH_API_SERVER_REGEX = /[a-z0-9]+$/;
  constructor() {}

  intercept(
    request: HttpRequest<unknown>, 
    next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
    /* return next.handle(request); */
    let regexResult = this.PATH_API_REGEX.exec(request.url);

		let path: string = '';
		let pathKeyServer: string = '';

		if (regexResult !== null) path = regexResult[0];

		regexResult = this.PATH_API_SERVER_REGEX.exec(path);

		if (regexResult !== null) pathKeyServer = regexResult[0];

		const server: ServerHostMap = Object.assign({
			...AppConfigService.settings?.server,
		});

		type ObjectKey = keyof typeof server;

		let hostname = server[pathKeyServer as ObjectKey];

		hostname = hostname ? hostname : '';

		const newUrl = hostname + request.url;

		return next.handle(
			request.clone({
				url: newUrl,
			}),
		);
  }
}
