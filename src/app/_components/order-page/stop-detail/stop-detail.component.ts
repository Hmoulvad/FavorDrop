import {Component, OnInit, Input} from '@angular/core';
import {Stop} from "../../../_models/stop";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {OrderService} from "../../../_services/order.service";
import {Http, Response} from "@angular/http";

@Component({
  selector: 'fd-stop-detail',
  templateUrl: 'stop-detail.component.html'
})
export class StopDetailComponent implements OnInit {
  @Input() stop: Stop;
  id: number;
  //title: string = 'Dine stop';
  zoom: number = 9;
  latA: number = 55.686353;
  lngA: number = 12.550135;
  latB: number = 55.660557;
  lngB: number = 12.622314;
  address: string = "venedigvej";
  city: string = "københavn";
  zip: number = 2300;

  constructor(private http: Http, private orderService: OrderService, private route: ActivatedRoute, private rout: Router) { }

  ngOnInit() {
    this.onPositionUpdate();
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.stop = this.orderService.getStopIndex(this.id);
        }
      );
  }
  private extractData(res: Response) {
    let body = res.json();

    return body.data || { };
  }

  deleteStop() {
    this.orderService.deleteStop(this.id);
    this.rout.navigate(['../'],{relativeTo: this.route})
  }

    onPositionUpdate(){
    let url = "https://maps.googleapis.com/maps/api/geocode/json?address=venedigvej+10,+copenhagen,+denmark&key=AIzaSyBoy6D6WrByFtvwa6KwOxx5MZ8fPIAxNkY";
      return this.http.get(url)
        .map((res:Response) => this.extractData(res))
      }

}

