import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoAddEditComponent } from '../info-add-edit/info-add-edit.component';
import { InfosystemService } from '../service/infosystem.service';
import { SnackBarService } from '../service/snack-bar.service';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-information',
  templateUrl: './data-information.component.html',
  styleUrls: ['./data-information.component.css'],
 
})
export class DataInformationComponent  implements OnInit {
 
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'phone', 'email', 'cnic', 'dob', 'gender', 'experience', 'education', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog, private _infoService: InfosystemService, private _snackBar: SnackBarService,private _router:Router) {
    // this._infoService.changeName(true);
   }

  ngOnInit(): void {
    this._router.routeReuseStrategy.shouldReuseRoute=()=>{return false}   ;
    this.getInfomration();
  }

  openAddEditInfoForm() {
    debugger;
    const dialogref = this._dialog.open(InfoAddEditComponent);
    dialogref.afterClosed().subscribe({

      next: (val) => {
        if (val) {
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
    debugger;
    const dialogRef = this._dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this._infoService.deleteInfo(id).subscribe({

          next: (resp) => {
            this._snackBar.openSnackBar(id + " id deleted successfully", 'OK');
            this.getInfomration();
          },
          error: console.log
        })
      }
    });
  }


  updateInfomration(data: any) {
    debugger;
    const dialogref = this._dialog.open(InfoAddEditComponent, {
      data: data
    });
    dialogref.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getInfomration();
        }
      }
    })

  }
}
