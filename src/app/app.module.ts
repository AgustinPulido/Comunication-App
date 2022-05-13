import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputExampleComponent } from './input-example/input-example.component';
import { OutputExampleComponent } from './output-example/output-example.component';
import { ViewchildExampleComponent } from './viewchild-example/viewchild-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ChildComponent } from './input-example/child/child.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { Child2Component } from './output-example/child2/child2.component';
import { Child3Component } from './viewchild-example/child3/child3.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    InputExampleComponent,
    OutputExampleComponent,
    ViewchildExampleComponent,
    HeaderComponent,
    FooterComponent,
    DirectivasComponent,
    ChildComponent,
    Child2Component,
    Child3Component,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
