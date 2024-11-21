import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocumentService } from '../../../core/service/document.service';

@Component({
  selector: 'app-azure-test',
  imports: [],
  templateUrl: './azure-test.component.html',
  styleUrl: './azure-test.component.scss',
})
export class AzureTestComponent {
  #httpClient = inject(HttpClient);
  #documentService = inject(DocumentService);

  responseMessage = signal<string>('');

  callAzureFunction() {
    const functionUrl =
      'https://job-board-function.azurewebsites.net/api/testMsGraph';
    this.#httpClient.get(functionUrl).subscribe({
      next: (response) => {
        console.info(
          'AzureTestComponent.callAzureFunction() response:',
          response,
        );
        // this.responseMessage.set(response.message);
      },
      error: (error) => {
        console.info('AzureTestComponent.callAzureFunction() error:', error);
        this.responseMessage.set('Error');
      },
    });
  }

  saveSampleDocument() {
    this.#documentService.saveSampleDocument();
  }
}
