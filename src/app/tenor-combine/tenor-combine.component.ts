import { Component, OnInit, OnChanges, Input, OnDestroy } from '@angular/core';
import { TenorService } from '../service/tenor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tenor-combine',
  templateUrl: './tenor-combine.component.html',
  styleUrls: ['./tenor-combine.component.scss']
})
export class TenorCombineComponent implements OnInit,OnChanges ,OnDestroy {
  @Input() mydata: string;
  public heading = 'Trending';
  public tenorGifData: Array<any> = [];
  private gifData :Subscription;
  public showGifValue:boolean = false;
  public search_home = '';
  public searchDataBar:Subscription;
  constructor(private tenorService: TenorService) { }

  ngOnInit(){
    this.search_home = this.mydata;
    this.getTenorData();
  }

  //Tenor Data Fetch 
  getTenorData(){
    this.gifData=this.tenorService.getTenorData().subscribe((res) => {
      this.tenorGifData = res.results;
    });
    this.showGif();
  }

// On valuechange in searchBar
  ngOnChanges() {
    this.search_home = this.mydata;
    if (this.search_home !== undefined && this.search_home !== '') {
      this.searchValueGif(this.search_home);
      this.showGif();
    }
  }

  // Data Display after serching and getting the data after 3 second 
  showGif() {
    let root = this;
    setTimeout(function () {
      root.showGifValue = true;
    }, 3000);
  }

  // This function is for searching  in which we fetch the value of search Data
  searchValueGif(item) {
    this.showGifValue= false;
    this.searchDataBar = this.tenorService.getSearchGif(item).subscribe(data => {
        this.tenorGifData = data.results;
        this.heading = `Your Search "${item}"`;
      });
  }

  //Destroying (Unsubscribe) the subscribed one  
  ngOnDestroy(){
    this.gifData.unsubscribe();
    this.searchDataBar.unsubscribe();
  }

}
