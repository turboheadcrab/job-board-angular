import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import type { Section } from '../../shared/model/question.model';
import { QUESTION_SECTIONS } from '../../shared/data/application-data';

@Injectable({
  providedIn: 'root',
})
export class ApplicationConfigService {
  #sections: Section[] = QUESTION_SECTIONS;

  getSections(): Observable<Section[]> {
    return of(this.#sections);
  }
}
