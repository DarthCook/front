import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {UserComponent} from "./user-list/user/user.component";
import {UserListComponent} from "./user-list/user-list.component";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzWaveModule} from "ng-zorro-antd/core/wave";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {UserService} from "./service/User.service";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        IconsProviderModule,
        NzLayoutModule,
        NzMenuModule,
        NzTableModule,
        NzWaveModule,
        NzButtonModule,
        NzInputModule,
        NzBreadCrumbModule
    ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
