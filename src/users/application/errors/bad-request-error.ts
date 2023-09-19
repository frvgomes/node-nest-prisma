export class BadRequetError extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'BadRequestError';
  }
}
