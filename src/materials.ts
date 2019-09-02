import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';


@NgModule({

    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatToolbarModule,
        MatBadgeModule,
        MatMenuModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatTableModule,
        MatCardModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatToolbarModule,
        MatBadgeModule,
        MatMenuModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatTableModule,
        MatCardModule
    ]

})
export class MaterialsModule { }