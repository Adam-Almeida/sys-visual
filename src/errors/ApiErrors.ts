export default class ApiErrors extends Error {
  public readonly statusCode?: number
  constructor(messsage: string, statusCode?: number) {
    super(messsage)
    this.statusCode = statusCode
  }
}
