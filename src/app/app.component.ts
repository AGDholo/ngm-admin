import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appbar = [{ text: '主页' }, { text: '数据' }];

  announcement = [
    {
      text: '币安上市 NuCypher（NU）',
      origin: '币安',
      time: '2021年06月04日13:30',
      expire: false,
    },
    {
      text: '欧易OKEx上线Mina Protocol (MINA)的公告',
      origin: 'OKEx',
      time: '2021年06月04日13:30',
      expire: false,
    },
    {
      text: 'Huobi Global将于5月14日上线XCH (Chia Network) 新币活动',
      origin: '火币',
      time: '2021年06月04日13:30',
      expire: false,
    },
    {
      text: '币安上市 Livepeer（LPT）',
      origin: '币安',
      time: '2021年06月04日13:30',
      expire: true,
    },
    {
      text: '币安上市 Mask Network（MASK）',
      origin: '币安',
      time: '2021年06月04日13:30',
      expire: true,
    },
  ];

  title = 'epicdata-web';
}
