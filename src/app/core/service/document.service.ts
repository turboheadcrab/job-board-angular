import { Injectable } from '@angular/core';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import { FormRecord } from '@angular/forms';

import type { Question } from '../../shared/model/question.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  saveFormAsWordDoc(form: FormRecord, shownQuestions: Question[]) {
    const formValue = form.value;
    console.info('ApplyComponent.onSubmit(), form.value: ', formValue);
    const paragraphs = shownQuestions.map<Paragraph>(
      (question: Question, index: number) =>
        new Paragraph({
          children: [
            new TextRun({
              text: `${index + 1}. ${question.label}`,
              bold: true,
              break: 2,
            }),
            new TextRun({
              text: `${formValue[question.key]}`,
              break: 1,
            }),
          ],
        }),
    );
    console.info('ApplyComponent.onSubmit(), paragraphs: ', paragraphs);
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              alignment: 'center',
              heading: 'Heading1',
              children: [
                new TextRun({
                  text: 'Application Answers',
                }),
              ],
            }),
            ...paragraphs,
          ],
        },
      ],
    });
    this.#download(doc);
  }

  #download(doc: Document): void {
    Packer.toBlob(doc).then((blob) => saveAs(blob, 'test.docx'));
  }
}
