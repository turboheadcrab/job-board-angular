import { Injectable } from '@angular/core';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import { FormRecord } from '@angular/forms';

import type { Section } from '../../shared/model/question.model';

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

      // Group the questions by their repeatable index
      const groupedQuestions: Record<string, Record<string, string>> = {};

      Object.keys(formValue).forEach((key) => {
        const [sectionKey, repeatableIndex, questionKey] = key.split('_');
        if (section.key === sectionKey) {
          if (!groupedQuestions[repeatableIndex]) {
            groupedQuestions[repeatableIndex] = {};
          }
          groupedQuestions[repeatableIndex][questionKey] = formValue[key];
        }
      });

      // Iterate over each repeatable index
      Object.keys(groupedQuestions).forEach((repeatableIndex) => {
        // Add subsection header, if necessary
        if (section.isRepeatable) {
          allParagraphs.push(
            new Paragraph({
              alignment: 'start',
              heading: 'Heading3',
              children: [
                new TextRun({
                  text: repeatableIndex + 1,
                  bold: true,
                  break: 2,
                }),
              ],
            }),
          );
        }

        // Add questions for this repeatable index
        section.questions.forEach((question) => {
          const questionAnswer =
            groupedQuestions[repeatableIndex][question.key];
          allParagraphs.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: `${question.label}${question.isRequired ? '*' : ''}`,
                  bold: true,
                  break: 2,
                }),
                new TextRun({
                  text: questionAnswer,
                  break: 1,
                }),
              ],
            }),
          );
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
