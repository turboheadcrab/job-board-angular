import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-azure-test',
  imports: [],
  templateUrl: './azure-test.component.html',
  styleUrl: './azure-test.component.scss',
})
export class AzureTestComponent {
  #httpClient = inject(HttpClient);
  responseMessage = signal<string>('');

  callAzureFunction() {
    const functionUrl =
      'https://job-board-function.azurewebsites.net/api/testfunctiontrigger';
    this.#httpClient
      .get(functionUrl, {
        responseType: 'text',
      })
      .subscribe({
        next: (response) => {
          console.info(
            'AzureTestComponent.callAzureFunction() response:',
            response,
          );
          this.responseMessage.set(response);
        },
        error: (error) => {
          console.info('AzureTestComponent.callAzureFunction() error:', error);
          this.responseMessage.set('Error');
        },
      });
  }
}
