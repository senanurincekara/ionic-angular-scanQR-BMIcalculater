import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
 
})
export class HomePage {

  constructor(
    private router: Router
  ) {}

  ngOnInit(){
    this.startScan();
  }

  async startScan() {
    document.querySelector('body')?.classList.add('scanner-active');
    await BarcodeScanner.checkPermission({ force: true });
  
    // make background of WebView transparent
    // note: if you are using ionic this might not be enough, check below

    BarcodeScanner.hideBackground();
  
    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result


  
    // if the result has content
    if (result.hasContent) {
      console.log(result.content); // log the raw scanned content

      localStorage.setItem('loginUserData', result.content);
      document.querySelector('body')?.classList.remove('scanner-active');

      this.router.navigate(['/bmi'])
    }
  }

}
