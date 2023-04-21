import { NgModule } from "@angular/core";

import { ServicesComponent } from "./services.component";
import { RouterModule, Routes } from "@angular/router";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzListModule } from "ng-zorro-antd/list";
import { NzPageHeaderModule } from "ng-zorro-antd/page-header";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    {
        path: '',
        component: ServicesComponent,
    }
]

@NgModule({
    declarations: [ServicesComponent],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        NzLayoutModule,
        NzCardModule,
        NzIconModule,
        NzButtonModule,
        NzTableModule,
        NzListModule,
        NzPageHeaderModule
    ],
})
export class ServicesModule { }