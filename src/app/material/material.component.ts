import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import * as internal from 'stream';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css'],
})
export class MaterialComponent implements OnInit {
  constructor(public httpClient: HttpClient) {}
  parsedResult: any;

  ngOnInit(): void {}

  async awittest(): Promise<void> {
    try {
      let data = await fetch('https://api.wazirx.com/sapi/v1/tickers/24hr');
      this.parsedResult = await data.json();
      console.info(this.parsedResult);

      // this.httpClient
      //   .get('https://api.wazirx.com/sapi/v1/tickers/24hr')
      //   .subscribe((resp) => {
      //     console.log(resp);
      //   });
    } catch (e) {
      console.error('Something happened');
    }
  }
}
