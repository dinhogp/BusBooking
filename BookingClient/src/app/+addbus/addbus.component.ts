import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../shared/animations/fade-in-top.decorator";
import { TestService } from '../+test/test.service';

@FadeInTop()
@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css'],
})
export class AddbusComponent implements OnInit {

  myDateValue: Date;
  myTimeValue: String;
  buses:Bus;

  public validationOptions:any = {

    // Rules for form validation
    rules: {
      busname: {
        required: true,
        minlength: 5,
        maxlength: 50
      },
      departure: {
        required: true,
        minlength: 5,
        maxlength: 50
      },
      destination: {
        required: true,
        minlength: 5,
        maxlength: 50
      },
      timeOfdeparture: {
        required: true,
        minlength:5,
        maxlength:5
      },
      busLimit: {
        type: Number,
        required: true,
    
      },
      busPrice: {
          type:Number,
          required:true
      },
    },

    // Messages for form validation
    messages: {
      busname: {
        required: "The bus name is required",
        minlength: "Min length of 5",
        maxlength: "Max Length of 50"
      },
      departure: {
        required: "The area of departure is required",
        minlength: "Min length of 5",
        maxlength: "Max Length of 50"
      },
      destination: {
        required: "The area of destination is required",
        minlength: "Min length of 5",
        maxlength: "Max Length of 50"
      },
      timeOfdeparture: {
        required: "The time of departure is required",
        minlength: "Min length of 5",
        maxlength: "Max Length of 5"
      },
      busLimit: {
        type: "Value has to be a number",
        required: "the bus limit is required",
    
      },
      busPrice: {
        type: "Value has to be a number",
        required: "the bus price is required",
      },
    },
    submitHandler: this.onSubmit

  };

  constructor(private testService : TestService) { }

  ngOnInit() {
    //this.myDateValue = new Date();
    this.buses = new Bus();
  }

  onSubmit(){
    console.log('\n', 'submit handler for validated form', '\n\n');
    console.log(this.buses);
    if (window.confirm('Are you sure you want to Submit?')) {

      this.testService.addBus(this.buses).subscribe(result => {
      }, err => {
          alert(err);
      });
  }
  }

  onDateChange(newDate : Date){
 
  }

}

class Bus{
  public busname:string;
  public departure: string;
  public destination: string;
  public timeOfdeparture: string;
  public dateOfdeparture: Date;
  public busLimit: number;
  public busPrice: number;
}


