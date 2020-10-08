import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { FilterAuthorPipe } from './filter-author.pipe';



@NgModule({
  declarations: [FilterPipe, FilterAuthorPipe],
  exports:[FilterPipe, FilterAuthorPipe]
})
export class PipesModule { }
