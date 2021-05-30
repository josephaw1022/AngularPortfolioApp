import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule, RippleGlobalOptions } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { AngulardialogComponent } from './components/dialogs/angulardialog/angulardialog.component';
import { CustomDialogComponent } from './components/dialogs/custom-dialog/custom-dialog.component';
import { ExpressdialogComponent } from './components/dialogs/expressdialog/expressdialog.component';
import { FlaskdialogComponent } from './components/dialogs/flaskdialog/flaskdialog.component';
import { GithubdialogComponent } from './components/dialogs/githubdialog/githubdialog.component';
import { NextdialogComponent } from './components/dialogs/nextdialog/nextdialog.component';
import { NodedialogComponent } from './components/dialogs/nodedialog/nodedialog.component';
import { ReactdialogComponent } from './components/dialogs/reactdialog/reactdialog.component';
import { VuedialogComponent } from './components/dialogs/vuedialog/vuedialog.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { counterReducer } from './state_managment/count/count.reducer';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';
import { PollsComponent } from './views/polls/polls.component';
import { SkillsComponent } from './views/skills/skills.component';
import { TodoComponent } from './views/todo/todo.component';
const globalRippleConfig: RippleGlobalOptions = {
  disabled: true,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PollsComponent,
    NavbarComponent,
    ContentComponent,
    AboutComponent,
    TodoComponent,
    CustomDialogComponent,
    SkillsComponent,
    AngulardialogComponent,
    FlaskdialogComponent,
    GithubdialogComponent,
    NextdialogComponent,
    NodedialogComponent,
    ExpressdialogComponent,
    VuedialogComponent,
    ReactdialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    A11yModule,
    ClipboardModule,
    MatSnackBarModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatStepperModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    ScrollingModule,
    LayoutModule,
    MatCardModule,
    StoreModule.forRoot({ count: counterReducer }),
  ],

  providers: [
    // {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
