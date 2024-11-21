import { inject, Injectable } from '@angular/core';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import { FormRecord } from '@angular/forms';

import type { Section } from '../../shared/model/question.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  #httpClient = inject(HttpClient);

  #download(doc: Document, name: string): void {
    Packer.toBlob(doc).then((blob) => saveAs(blob, `${name}.docx`));
  }

  #generateSampleDocument() {
    const title = new Paragraph({
      children: [
        new TextRun({
          text: 'Sample Document 40pt',
          bold: true,
          size: 40,
        }),
      ],
    });

    const paragraph1 = new Paragraph({
      children: [
        new TextRun(
          'This is the first paragraph of the sample document. It can contain any text.',
        ),
      ],
    });

    const paragraph2 = new Paragraph({
      children: [
        new TextRun({
          text: 'This is the second paragraph. ',
        }),
        new TextRun({
          text: 'It shows how to format text with ',
          bold: true,
        }),
        new TextRun({
          text: 'different styles.',
          italics: true,
        }),
      ],
    });

    return new Document({
      sections: [
        {
          children: [title, paragraph1, paragraph2],
        },
      ],
      title: 'Sample Document Title',
      creator: 'Sample Creator',
    });
  }

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
    this.#download(doc, 'test');
  }

  saveSampleDocument() {
    const doc = this.#generateSampleDocument();

    this.#download(doc, 'sample');
  }

  uploadSampleDocument() {
    const doc = this.#generateSampleDocument();
    const fileName = 'file-name.docx';
    Packer.toBlob(doc)
      .then((fileContentBlob) => {
        const formData = new FormData();
        formData.append('file', fileContentBlob, fileName);

        const apiUrl =
          'https://job-board-function.azurewebsites.net/api/testMsGraph';

        this.#httpClient.post(apiUrl, formData).subscribe({
          next: (response) => {
            console.info('File uploaded successfully:', response);
          },
          error: (error) => {
            console.info('DocumentService.uploadSampleDocument().error()');
            console.error('Error uploading Word document:', error);
          },
        });
      })
      .catch((error) => console.error('Error uploading Word document:', error));
  }
}
