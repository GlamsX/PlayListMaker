import { NgModule } from "@angular/core";
import { SettingsComponent } from "./settings.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";

const routes: Routes = [
    {
        path: '',
        component: SettingsComponent,
        children: [
            {
                path: 'profile',
                loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
            },
            {
                path: 'services',
                loadChildren: () => import('./services/services.module').then(m => m.ServicesModule),
            }
        ]
    }
];

@NgModule({
    declarations: [SettingsComponent],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        NzLayoutModule,
        NzMenuModule,
    ],
})
export class SettingsModule { }