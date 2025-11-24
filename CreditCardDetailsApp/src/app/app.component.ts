import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

@Component({
  selector: 'app-root',
  standalone: true,            
  imports: [RouterOutlet, 
    PaymentDetailsComponent],  
  templateUrl: './app.component.html',
  styleUrls: []  
})
export class AppComponent {
  
  protected readonly title = signal('CreditCardDetailsApp');
}
