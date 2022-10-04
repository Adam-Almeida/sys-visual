export class ApiErrors extends Error {
  public readonly statusCode?: number
  constructor(messsage: string, statusCode?: number) {
    super(messsage)
    this.statusCode = statusCode
  }
}

export class BadRequestError extends ApiErrors {
  constructor(message: string) {
    super(message, 400)
  }
}

export class UnauthorizedError extends ApiErrors {
  constructor(message: string) {
    super(message, 401)
  }
}

export class NotFoundError extends ApiErrors {
  constructor(message: string) {
    super(message, 404)
  }
}
