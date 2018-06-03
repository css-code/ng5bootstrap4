import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    ModalDialogComponent,
    TabsContainerComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
