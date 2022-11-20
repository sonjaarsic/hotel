import { NgModule } from "@angular/core";
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
    imports: [MatBadgeModule, MatTabsModule, MatListModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule],
    exports: [MatBadgeModule, MatTabsModule, MatListModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule]
})

export class MaterialModule {}