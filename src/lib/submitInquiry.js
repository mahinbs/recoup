import { addContactMessage } from './contactStorage';
import { submitContactToSheet } from './submitContactToSheet';

export async function submitInquiry(payload) {
  addContactMessage(payload);
  await submitContactToSheet(payload);
}
