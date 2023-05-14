import { HttpExceptions } from "./httpException";
import { HttpStatusCode } from "./list-httpStatus.enum";


export class Exceptions extends HttpExceptions {
	constructor(message: string) {
		super(message, HttpStatusCode.OK)
	}
}
