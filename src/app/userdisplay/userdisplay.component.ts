import { Component, OnInit, ViewChild } from '@angular/core';
import { UserdataService } from './userdata.service';
import { User } from './user';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent implements OnInit {
displayedColumns: string[] = ['user_email', 'user_name', 'user_password', 'user_mobile_no'];
// dataSource:User[]=[];
dataSource:MatTableDataSource<User>;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private _data:UserdataService) {
    this._data.getAllUsers().subscribe(
      (data:User[])=>{
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
   }
  ngOnInit() {

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
