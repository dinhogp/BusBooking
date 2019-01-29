
import { Router } from '@angular/router';
import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { JsonApiService } from "app/core/api/json-api.service";
import { RowDetailService } from "../row-detail.service";

@Component({
  selector: 'row-detail-demo',
  templateUrl: './row-detail.component.html'

})
export class RowDetailComponent implements OnInit {

  @ViewChild('myTable') table: any;

  trigger=false;
  rows: any[] = [];
  expanded: any = {};
  timeout: any;
  buses:Bus[];

 constructor(
    private rowdetailService:RowDetailService,private jsonApiService:JsonApiService,private router:Router
  ) {

  }

  ngOnInit() {
    this.rowdetailService.getBuses().subscribe((buses)=>{
      
      this.rows = buses;
      //this.status=customers.isGold;
      console.log(this.rows);
    });
    /*this.jsonApiService.fetch('/tables/datatables.filters.json').subscribe(data=> {
      this.rows = data;
      console.log(this.rows);
    })*/
  }



  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }


  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  viewList(row) {
    //console.log('View List Clicked!', row);
    console.log(row._id);
    this.router.navigate(['/main/test'], { queryParams: { id: row._id } });
    //this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

}

interface Bus{
  busname: string,
  departure: string,
  destination: string,
  dateOfdeparture: Date,
  timeOfdeparture: string,
  busLimit: number,
  busPrice: number,
  numberBooked: number
}