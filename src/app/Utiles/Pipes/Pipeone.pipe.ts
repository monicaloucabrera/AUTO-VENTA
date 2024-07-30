import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Pipeone'
})
export class PipeonePipe implements PipeTransform {

  transform(value: string, buscar: string): any {
    const valorReemplazo = " ";
    return value.replaceAll(buscar,valorReemplazo);
  }

}
