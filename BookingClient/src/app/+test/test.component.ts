import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {TestService}from "./test.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  //students:Student[];
  status:boolean[];
  bookees: any[] = [];

  constructor(private testService : TestService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      
      const id = params['id'];
      console.log(id);
      this.testService.getList(id).subscribe((data)=>{      
          this.bookees = data;
          //this.status=customers.isGold;
          console.log(this.bookees);
    });
  });

  }

  setStatus(status:boolean):void{
    //this.status = status;
  }

}

interface Student{
  _id:string,
  isGold:boolean,
  name:string,
  phone:string,
}
