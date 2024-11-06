import { Injectable } from '@angular/core';
import { Question } from '../../shared/model/question.model';
import { QUESTIONS } from '../../shared/data/application-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  #questions: Question[] = QUESTIONS;

  getQuestions(): Observable<Question[]> {
    return of(this.#questions);
  }
}
