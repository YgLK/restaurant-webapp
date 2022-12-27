import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import {MatIconModule} from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import { CartComponent } from './cart/cart.component';
import {MatTabsModule} from "@angular/material/tabs";
import { MenuFilterComponent } from './menu-filter/menu-filter.component';
import { CreateDishFormComponent } from './create-dish-form/create-dish-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {DishService} from "./shared/dish.service";
import { FilterPipe } from './shared/filter.pipe';
import { SearchPipe } from './shared/search.pipe';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { RatingComponent } from './rating/rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    CartComponent,
    MenuFilterComponent,
    CreateDishFormComponent,
    FilterPipe,
    SearchPipe,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    NgbModule,
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
