import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-ebooks',
  templateUrl: './ebooks.component.html',
  styleUrls: ['./ebooks.component.css']
})
export class EbooksComponent implements OnInit {
  ebooks: any[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getEbooksfromAPI().subscribe(response => {
      this.ebooks = response['results'];
      localStorage.setItem('# of ebooks from iTunesAPI', this.ebooks.length.toString());
    });
  }

}
