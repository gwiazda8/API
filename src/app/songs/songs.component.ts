// ng
import { Component, OnInit, ViewChild } from '@angular/core';
// Angular material
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
// services
import { DataService } from './../shared/data.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  private songs: any[];
  readonly displayedColumns = ['thumbnail', 'artistName', 'trackName', 'collectionName', 'trackPreview'];
  public dataSource: MatTableDataSource<any[]>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getSongsfromAPI().subscribe(response => {
      this.songs = response['results'].filter(item => item.wrapperType === 'track');
      this.dataSource = new MatTableDataSource(this.songs);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      localStorage.setItem('# of songs from iTunesAPI', this.songs.length.toString() );
      localStorage.setItem('table pageSize', this.paginator.pageSize.toString() );
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


