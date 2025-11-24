import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentDetailFormComponent } from './payment-detail-form/payment-detail-form.component';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetail } from '../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  standalone: true, 
  imports: [CommonModule,PaymentDetailFormComponent],  

  templateUrl: './payment-details.component.html',
  styleUrls: []
})
export class PaymentDetailsComponent implements OnInit{

  constructor(public service : PaymentDetailService, private toastr: ToastrService)
  {

  }
  ngOnInit(): void {
    this.service.getPaymentDetailsList();
  }

  populateForm(selectedRecord:PaymentDetail)
  {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id:number)
  {
    if(confirm('Are you sure you want to delete this Record?'))
    {
      this.service.deletePaymentDetail(id)
          .subscribe({
              next: res => {
              this.service.List = res as PaymentDetail[];
              this.toastr.error('Deleted Successfully', 'Credit Card Detail Registeration')
              }, 
              error: err => {console.log(err)}
            })
    }
    
  }
}
