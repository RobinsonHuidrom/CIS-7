
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { CustomerInfo } from './../../shared/customer-info.model';
import { Component, OnInit , Input } from '@angular/core';
import { CustomerInfoService } from 'src/app/shared/customer-info.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  list : CustomerInfo[];
  sNo : string;  
  page = 1;
  pageSize = 5;
  collectionSize;

  get listDATA():CustomerInfo[] {
    return this.list
      .map((data, i) => ({id: i + 1, ...data}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }

  constructor( private service : CustomerInfoService,
               private firestore: AngularFirestore,
               private Toastr: ToastrService ) { }

  ngOnInit() {

    this.pages();

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

  search() {

    if(this.sNo != "") {
      this.list = this.list.filter(res=> {
        return res.slNo.toLocaleLowerCase().match(this.sNo.toLocaleLowerCase());
      });
    } 
    else if( this.sNo == "") {
      this.ngOnInit();
    }
  }

  pages() {
  this.firestore.collection('CustomerInfo').valueChanges().subscribe( values => {
  this.collectionSize = values.length 
    });
   }
}


