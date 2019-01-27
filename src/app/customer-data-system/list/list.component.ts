import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { CustomerInfo } from './../../shared/customer-info.model';
import { Component, OnInit } from '@angular/core';
import { CustomerInfoService } from 'src/app/shared/customer-info.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list : CustomerInfo[];

  constructor(private service : CustomerInfoService,
              private firestore: AngularFirestore,
              private Toastr: ToastrService ) { }

  ngOnInit() {
    this.service.getCustomers().subscribe( res => {
      this.list = res.map(item => {
        return { 
                id: item.payload.doc.id,
                ...item.payload.doc.data() 
              } as CustomerInfo;
      })
    })
  }

  onEdit(data: CustomerInfo) {
    this.service.formData = Object.assign({}, data);
  }

  onDelete(id:string) {
    if(confirm("Are you sure you want to delete this record??")) {
      this.firestore.doc('CustomerInfo/'+ id).delete();
      this.Toastr.warning('Deleted Successfully','CIS Deleted');
    }
  }
}
