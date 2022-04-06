import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css'],
})
export class CryptoComponent implements OnInit {
  parsedResult: any;
  constructor() {}

  ngOnInit(): void {}

  async getdata(): Promise<void> {
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
