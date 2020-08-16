import { Component, OnInit, OnDestroy } from '@angular/core';
import {TenorService} from '../service/tenor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tenor-gif',
  templateUrl: './tenor-gif.component.html',
  styleUrls: ['./tenor-gif.component.scss']
})
export class TenorGifComponent implements OnInit,OnDestroy {
  public dataTenor: Array<any> = [];
  private tenorData :Subscription;
  public searchAutoFillData :Array<any> = [];
  public showDrop:boolean =false
  public autoFillData :Subscription;
  public dataSearchedGif :boolean =false;
  public search = '';
  public searchVal = '';
  public openTrendingGif = true;

  constructor(private tenorService: TenorService) { }

  ngOnInit(){
  this.getTenorData();
  }

   // getTenor data fetch  function 
   getTenorData(){
    this.tenorData = this.tenorService.getTenorData().subscribe((res) => {
      this.dataTenor = res.results;
      console.log('data',this.dataTenor);
    });
  }

  //From Even whatever the value is being compard with ASCII value //
  getKeyCode(str: string) {
    return str.charCodeAt(str.length);
  }

  // This function is for AutoFill Dropown Data
  getAutoFillData(event) {
    let charKeyCode = event.keyCode || event.which;
    if (charKeyCode === 0 || charKeyCode === 229) {
      charKeyCode = this.getKeyCode(this.search);
    } else {
    }
    if (charKeyCode === 13) {
      this.searchVal = this.search;
    }
    this.autoFillData = this.tenorService.getAutoFillSuggestion(this.search).subscribe(data => {
        this.searchAutoFillData = data.results;
        // AutoFill DropDown Will Open Hide/Show 
        if (this.searchAutoFillData.length > 0) {
          this.showDrop = true;
        }
        else if (this.searchAutoFillData.length === 0) {
          this.showDrop = false;
        }
      });
  }

  // Data show/hide after  seraching and clicking on dropDown
  dropDown(s) {
    this.searchVal = s;
    this.dataSearchedGif = true;
    this.openTrendingGif = false;
  }

  // destroying the subscribed one //
  ngOnDestroy(){
    this.tenorData.unsubscribe()
    this.autoFillData.unsubscribe();
  }
}
