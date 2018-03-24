import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  // DECLARE FLOWER LIST
  flowerList: object[];
  title: 'Flower List';
  constructor() { }

  ngOnInit() {
    // STATIC OBJECT LIST
    this.flowerList = [
      {
        name: 'TULIP TRIO',
        img: '../../assets/img/flower-1.jpg',
        // tslint:disable-next-line:max-line-length
        description: 'Từ hoa tulip hoang được vun trồng thành hoa tulip vườn. Trong vòng 400 năm, hàng ngàn giống hoa tulip hoang dã đã xuất hiện và phát triển. Tulips cần độ ẩm vào mùa xuân, nóng khô vào mùa hè, trên đất giàu dinh dưỡng với độ pH 6,5-7,0 (để các củ phát triển tốt nhất), cần đêm mát mẻ và mùa đông lạnh để phát triển...'
      },
      {
        name: 'CÚC TÂY',
        img: '../../assets/img/flower-2.jpg',
        // tslint:disable-next-line:max-line-length
        description: 'Tên gọi khoa học của họ này có từ chi Aster (cúc tây) và có từ nguyên từ gốc tiếng Hy Lạp mang nghĩa ngôi sao-hình dáng của bông hoa trong các loài của nó, được điển hình hóa thành tên gọi phổ biến chung là hoa cúc. Họ Asteraceae là họ lớn thứ nhất hoặc thứ hai trong ngành Magnoliophyta...'
      },
      {
        name: 'HƯỚNG DƯƠNG ĐÀ LẠT',
        img: '../../assets/img/flower-3.jpg',
        // tslint:disable-next-line:max-line-length
        description: 'Hoa hướng dương quay theo hướng Mặt trời. Trong một nghiên cứu được công bố trên Science, các nhà nghiên cứu phát hiện đồng hồ sinh học và khả năng phát hiện ánh sáng của hoa hướng dương cùng hoạt động, kích hoạt các gen liên quan đến sự phát triển tại đúng thời điểm ...'
      }
    ];
  }

}
