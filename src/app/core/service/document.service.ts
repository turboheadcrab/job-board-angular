import { Injectable } from '@angular/core';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import { FormRecord } from '@angular/forms';

import type { Question, Section } from '../../shared/model/question.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  saveFormAsWordDoc(form: FormRecord, sectionTypes: Section[]) {
    const formValue = form.value;
    console.info(
      'DocumentService.saveFormAsWordDoc2(), form.value: ',
      formValue,
    );

    // Create an array to hold all paragraphs
    const allParagraphs: Paragraph[] = [];

    // Iterate over each section
    sectionTypes.forEach((section) => {
      // Add section header
      allParagraphs.push(
        new Paragraph({
          alignment: 'start',
          heading: 'Heading2',
          children: [
            new TextRun({
              text: section.label,
              bold: true,
              break: 3,
            }),
          ],
        }),
      );

      // Iterate over each question in the section
      section.questions.forEach((question: Question) => {
        // For each repeatable index in the form, get the corresponding value
        Object.keys(formValue).forEach((key) => {
          const [sectionKey, , questionKey] = key.split('_');
          if (section.key === sectionKey && question.key === questionKey) {
            allParagraphs.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: question.label,
                    bold: true,
                    break: 2,
                  }),
                  new TextRun({
                    text: formValue[key],
                    break: 1,
                  }),
                ],
              }),
            );
          }
        });
      });
    });
    console.info(
      'DocumentService.saveFormAsWordDoc2(), paragraphs: ',
      allParagraphs,
    );
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              alignment: 'center',
              heading: 'Heading1',
              children: [
                new TextRun({
                  text: 'Application answers',
                }),
              ],
            }),
            ...allParagraphs,
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
