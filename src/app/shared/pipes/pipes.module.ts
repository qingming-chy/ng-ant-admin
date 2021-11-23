import {NgModule} from '@angular/core';
import {NumberLoopPipe} from './number-loop.pipe';
import {HtmlPipe} from './html.pipe';
import {MapPipe} from './map.pipe';
import {TableFiledPipe} from "./table-filed.pipe";

const PIPES = [NumberLoopPipe, HtmlPipe, MapPipe, TableFiledPipe];

@NgModule({
  declarations: [...PIPES],
  imports: [],
  exports: [...PIPES]
})
export class PipesModule {
}
