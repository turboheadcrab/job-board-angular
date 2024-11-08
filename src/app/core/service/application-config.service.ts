import { Injectable } from '@angular/core';
import { Question, Section } from '../../shared/model/question.model';
import {
  QUESTION_SECTIONS,
  QUESTIONS,
} from '../../shared/data/application-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationConfigService {
  #questions: Question[] = QUESTIONS;
  #sections: Section[] = QUESTION_SECTIONS;

  constructor() {}

  getQuestions(): Observable<Question[]> {
    return of(this.#questions);
  }

  getSections(): Observable<Section[]> {
    return of(this.#sections);
  }
}
