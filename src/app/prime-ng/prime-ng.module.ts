import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
    exports: [ButtonModule, ProgressSpinnerModule, AutoCompleteModule, TableModule],
})
export class PrimeNgModule {}
