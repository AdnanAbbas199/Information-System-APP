import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoAddEditComponent } from './info-add-edit/info-add-edit.component';
import { InfosystemService } from './service/infosystem.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'phone', 'email', 'cnic', 'dob', 'gender', 'experience', 'education', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog, private _infoService: InfosystemService) { }

  ngOnInit(): void {

    this.getInfomration();
  }
  openAddEditInfoForm() {
    const dialogref = this._dialog.open(InfoAddEditComponent);
    dialogref.afterClosed().subscribe({

      next:(val)=>{
        if(val){
          this.getInfomration();
        }
      }
    })

  }

  getInfomration() {
    this._infoService.getInfo().subscribe({

      next: (resp) => {
        this.dataSource = new MatTableDataSource(resp);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      },
      error: console.log

    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteInfomration(id: number) {
    this._infoService.deleteInfo(id).subscribe({

      next: (resp) => {
        alert(id + " id deleted successfully");
        this.getInfomration();


      },
      error: console.log

    })
  }
}
