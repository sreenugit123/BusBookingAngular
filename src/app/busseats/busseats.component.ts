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
  public noOfSeats:number;
  public seatsSelected:string;
  tPrice: any;
  constructor(private bks:BusbookingService, private route:ActivatedRoute) { 
    this.checkData=[];
    this.noOfSeats=0;
    this.seatsSelected='';
    this.vehicleList=[];
    this.busDetails=new Busdetails();
  }

  ngOnInit(): void {
         this.check=localStorage.getItem('bid');
         console.log(this.check);
         this.bks.getBusseats(this.check).subscribe(
          (data)=>{
              console.log(data);
              let dataArr:any;
              dataArr=data;
              this.vehicleList=dataArr;

          },
          (error)=>
          {
            console.log(error);
          }
        )
        this.bks.getBusDetails(this.check).subscribe(
          (data)=>{
              console.log(data);
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
  onChange(seatData:Busseats,isChecked:any){
    let checked= isChecked.target.checked;
    if(checked){
         this.checkData.push(seatData.sno);
    } else{
      const index = this.checkData.findIndex((x:any)=>x===seatData.sno);
      this.checkData.splice(index,1);
    }
    console.log(this.checkData.length);
    console.log(this.checkData.toString());
    this.noOfSeats=this.checkData.length;
    this.seatsSelected=this.checkData.toString();
  }

  bookTicket(){
    this.tPrice=Number(this.noOfSeats)*this.tPrice;
    localStorage.setItem('noOfSeatsBooked',(this.noOfSeats).toString());
    localStorage.setItem('SeatNo',(this.seatsSelected).toString());
    localStorage.setItem('TicketPrice',(this.tPrice).toString());
  }
}
