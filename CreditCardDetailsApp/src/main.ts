import { bootstrapApplication } from '@angular/platform-browser';
//import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

bootstrapApplication(AppComponent, 
{
    providers: [
          provideHttpClient(),
      provideAnimations(),
    importProvidersFrom(FormsModule, ToastrModule.forRoot())  
  ]
})
  .catch((err) => console.error(err));
