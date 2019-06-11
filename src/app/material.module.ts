import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule, 
    MatMenuModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule, 
        MatMenuModule
    ],
    exports: [
        MatToolbarModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule, 
        MatMenuModule
    ]
})
export class MaterialModule { }