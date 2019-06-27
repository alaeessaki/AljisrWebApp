import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';

@NgModule({

    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatIconModule,
        MatExpansionModule,
        MatToolbarModule,
        MatCardModule,
        MatTooltipModule,
        MatInputModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatIconModule,
        MatExpansionModule,
        MatToolbarModule,
        MatCardModule,
        MatTooltipModule,
        MatInputModule
    ]
})
export class MaterialModule { }  
