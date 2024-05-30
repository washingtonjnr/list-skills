import { HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
// Lib
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// Service
import { InMemoryDataService } from './services/in-memory-data/in-memory-data.service';
// Routes
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    // provideHttpClient(withFetch()),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService))
  ]
};
