import { Component, OnInit, Input } from '@angular/core';

// CREATE INTERFACE FLOWERDATA
interface FlowerData {
  name: string;
  img: string;
  description: string;
}

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {

  // INNER BINDING TO FLOWER-COMPONENT.HTML
  @Input() flower: FlowerData;

  constructor() { }

  ngOnInit() {
    // this.flower = {
    //   name: 'TULIP TRIO',
    //   img: '../../../assets/img/flower-1.jpg',
    //   tslint:disable-next-line:max-line-length
    //   description: 'Từ hoa tulip hoang được vun trồng thành hoa tulip vườn. Trong vòng 400 năm, hàng ngàn giống hoa tulip hoang dã đã xuất hiện và phát triển. Tulips cần độ ẩm vào mùa xuân, nóng khô vào mùa hè, trên đất giàu dinh dưỡng với độ pH 6, 5-7,0 (để các củ phát triển tốt nhất), cần đêm mát mẻ và mùa đông lạnh để phát triển...'
    // };
  }

}
