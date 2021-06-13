import { Component, Input } from '@angular/core';

const notification = [
  {
    title: 'Lorem ipsum dolor',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, repudiandae?',
    time: '4 min',
    outdated: false,
  },
];

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  @Input()
  flat: Boolean = false;

  @Input()
  bordered: Boolean = false;

  constructor() {}

  public get notifications() {
    return [...new Array(100)].reduce((items) => {
      items.push(...notification);
      return items;
    }, []);
  }
}
