import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

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
        MatInputModule,
        MatRadioModule,
        MatStepperModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatSelectModule,
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
        MatInputModule,
        MatRadioModule,
        MatStepperModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatSelectModule,
    ]
})
export class MaterialModule { }  
