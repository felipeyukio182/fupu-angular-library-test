import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emote',
  standalone: true
})
export class EmotePipe implements PipeTransform {

  transform(value: string, emote: string = ':)'): string {
    return `${value} ${emote}`;
  }

}
