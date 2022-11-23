import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from './app-config';

@Injectable({
	providedIn: 'root',
})
export class AppConfigService {
	private readonly jsonFile: string = `assets/config/app.config.json`;
	static settings: AppConfig | null = null;
	constructor(private http: HttpClient) {
		this.http.get<AppConfig>(this.jsonFile).subscribe({
			next: (response) => (AppConfigService.settings = response),
			error: (error) => {},
		});
	}

	loadSettings(): Promise<AppConfig | null> {
		return new Promise<AppConfig | null>((resolve, reject) => {
			if (AppConfigService.settings) resolve(AppConfigService.settings);
			else
				this.http.get<AppConfig>(this.jsonFile).subscribe({
					next: (response) => {
						AppConfigService.settings = response;
						resolve(response);
						console.log(response);
						
					},
					error: (error) => resolve(null),
				});
		});
	}
}
