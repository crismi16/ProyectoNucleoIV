import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(), 
    provideFirebaseApp(() => initializeApp({ 
      projectId: "proyectocrud-e593b", 
      appId: "1:789240567087:web:470dc41171f13eedfefdda", 
      storageBucket: "proyectocrud-e593b.firebasestorage.app", 
      apiKey: "AIzaSyAqPD9djGqvflM9-x88CVxypeg04nDtVB8", 
      authDomain: "proyectocrud-e593b.firebaseapp.com", 
      messagingSenderId: "789240567087" })), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore())
  ]
};
