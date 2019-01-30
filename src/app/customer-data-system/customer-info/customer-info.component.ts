import { ToastrService } from 'ngx-toastr';
import { CustomerInfoService } from './../../shared/customer-info.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})

export class CustomerInfoComponent implements OnInit {

  constructor( private service : CustomerInfoService, 
               private firestore : AngularFirestore,
               private toastr : ToastrService )  { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form != null )
    form.resetForm();
    this.service.formData = {
    id: null,
    slNo: '',
    orderId: '',
    orderDate: '', 
    shipDate: '',
    shipMode: '',
    customerId: '',
    customerName: '',
    segment: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    region: '',
    productId: '',
    productName: '',
    category: '',
    subCategory: '',
    sales: '',
    quality: '',
    discount: '',
    profits: ''
    }
  }


  onSubmit(form:NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if(form.value.id == null)
      this.firestore.collection('CustomerInfo').add(data);
    else
      this.firestore.doc('CustomerInfo/'+ form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success("Submitted Successfully","CIS");
  }

}
