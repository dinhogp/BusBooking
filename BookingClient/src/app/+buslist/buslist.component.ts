import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { JsonApiService } from "app/core/api/json-api.service";

@Component({
  selector: 'app-buslist',
  templateUrl: './buslist.component.html',
  styleUrls: ['./buslist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BuslistComponent implements OnInit {

  @ViewChild('myTable') table: any;

  rows: any[] = [];
  expanded: any = {};
  timeout: any;

 constructor(
    private jsonApiService:JsonApiService
  ) {

  }

  ngOnInit() {
    this.jsonApiService.fetch('/tables/datatables.filters.json').subscribe(data=> {
      this.rows = data;
    })
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

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

}
