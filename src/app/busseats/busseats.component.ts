import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusbookingService } from '../busbooking.service';
import { Busdetails } from '../busdetails';
import { Busseats } from '../busseats';

@Component({
  selector: 'app-busseats',
  templateUrl: './busseats.component.html',
  styleUrls: ['./busseats.component.css']
})
export class BusseatsComponent implements OnInit {
  public vehicleList:Array<Busseats>;
  public bid:any;
  public bname:any;
  public fcity:any;
  public tcity:any;
  public djourn:any;
  public busDetails:Busdetails;
  public check:any;
  public checkData:any;
  public seatsSelected:string;
  public bookButton:boolean;
  tPrice: any;
  public finalBusSeats:any;
  constructor(private bks:BusbookingService, private route:ActivatedRoute) { 
    this.checkData=[];
    this.seatsSelected='';
    this.vehicleList=[];
    this.busDetails=new Busdetails();
    this.bookButton=true;
  }

  ngOnInit(): void {
         this.check=localStorage.getItem('bid');
         console.log(this.check);
         this.bks.getBusseats(this.check).subscribe(
          (data)=>{
              console.log(data);
              this.finalBusSeats=[];
              let dataArr:any;
              dataArr=data;
              this.vehicleList=dataArr;
              
              this.vehicleList.forEach((element:any) => {
                this.finalBusSeats.push({
                  "bid":element.bid,
                  "sno":element.sno,
                  "sstatus":element.sstatus,
                  "booked":false
                })
              });

              this.finalBusSeats.forEach((element:any)=>{
                 if(element.sstatus==="booked"){
                   element.booked=true;
                 }
              })
          },
          (error)=>
          {
            console.log(error);
          }
        )
        this.bks.getBusDetails(this.check).subscribe(
          (data)=>{
              let datadetails:any;
              datadetails=data;
              this.busDetails=datadetails;
              this.bid=this.busDetails.bid;
              this.bname=this.busDetails.bname;
              this.fcity=this.busDetails.fcity;
              this.tcity=this.busDetails.tcity;
              this.djourn=this.busDetails.djourn;
              this.tPrice=this.busDetails.tprice;
          },
          (error)=>
          {
            console.log(error);
          }
        )
  }
  radio(seatData:Busseats){
    this.bookButton=false;
    this.checkData=seatData.sno;
    this.seatsSelected=this.checkData.toString();
  }

  bookTicket(){
    localStorage.setItem('SeatNo',(this.seatsSelected).toString());
    localStorage.setItem('TicketPrice',(this.tPrice).toString());

  }
}
