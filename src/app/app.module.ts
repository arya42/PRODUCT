import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
 import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
//import { MenuComponent } from './menu/menu.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
//import { FormComponent } from './form/form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { AddproductComponent } from './addproduct/addproduct.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { FormsModule } from'@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { AboutComponent } from './about/about.component';
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddproductComponent,
    AboutComponent,
    ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatToolbarModule,                       
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
