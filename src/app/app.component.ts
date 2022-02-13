import { Component } from '@angular/core';
import {  getCurrencySymbol  }from '@angular/common';
import { countries } from './country-data-store';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  selected: string ="";
  target:string="";
  fromcountry: any;
  curr: any;
  targetcurr:any;
  tocountry: any;
  targetvalue:any;
  amount:number=1;
  ApiUri:string= "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";
  response:number=0;
  
  public countries:any = countries
  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    countries.forEach((country, index, array) => {
      if(typeof country.currency.symbol== "boolean" || country.currency.symbol==false || country.currency.symbol=="false"){
        console.log(country);
        countries.splice(index,1);
      }
  });
    this.selected = countries[0].name;
    this.curr = getCurrencySymbol("EUR","wide");
    // console.log(countries);
  }

  onChangeMake(value: any): void{
    countries.forEach((country, index, array) => {
      if(country.name==value){
        this.curr= country.currency.symbol;
        this.fromcountry=country;
      }
  });
    console.log(this.fromcountry);
  }

  onSearchChange(value:any){
    console.log(value)
    this.amount=value;
    this.targetvalue=this.response*this.amount;
  }
  onTargetChange(value:any){
    countries.forEach((country, index, array) => {
      if(country.name==value){
        this.targetcurr= country.currency.symbol;
        this.tocountry=country;
      }
  });
  var tocountrycodelower = this.tocountry.currency.code.toLowerCase();
  var fromcountrycodelower = this.fromcountry.currency.code.toLowerCase();
  var uri = this.ApiUri+fromcountrycodelower+"/"+tocountrycodelower+".json";
  this.http.get<any>(uri).subscribe(data => {
        console.log(data);
        var jsondata = JSON.stringify(data)
        console.log("jsondata:"+jsondata)
        this.response = data[tocountrycodelower];
        console.log(this.response)
        this.targetvalue = this.response*this.amount;
        console.log(this.targetvalue)
    })
    
  }
  

}
