import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit {
  docUrl = environment.docUrl;

  @Input()
  remoteUrl: string = '';

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.setRemoteUrl();
  }

  protected setRemoteUrl() {
    this.remoteUrl = `${this.docUrl}/?path=/docs/${this.remoteUrl}`;
  }
}
