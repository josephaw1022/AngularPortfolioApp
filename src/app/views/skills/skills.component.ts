import { Component, OnInit } from '@angular/core';
import { IDialog } from 'src/app/types/intefaces';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from '../../components/dialogs/custom-dialog/custom-dialog.component';
import { AngulardialogComponent } from '../../components/dialogs/angulardialog/angulardialog.component';
import { ReactdialogComponent } from '../../components/dialogs/reactdialog/reactdialog.component';
import { DjangodialogComponent } from '../../components/dialogs/djangodialog/djangodialog.component';
import { ExpressdialogComponent } from '../../components/dialogs/expressdialog/expressdialog.component';
import { FlaskdialogComponent } from '../../components/dialogs/flaskdialog/flaskdialog.component';
import { GithubdialogComponent } from '../../components/dialogs/githubdialog/githubdialog.component';
import { NextdialogComponent } from '../../components/dialogs/nextdialog/nextdialog.component';
import { NodedialogComponent } from '../../components/dialogs/nodedialog/nodedialog.component';
import { VuedialogComponent } from '../../components/dialogs/vuedialog/vuedialog.component';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  reactdialog = ReactdialogComponent;
  openDialog(component: any): void {
    const dialogRef = this.dialog.open(component);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  onHoverMessage = 'click to read more';

  ngOnInit(): void {}
}
