export interface HttpExceptionOptions {
	cause?: Error;
	description?: string;
}

interface DescriptionAndOptions {
	description?: string;
	httpExceptionOptions?: HttpExceptionOptions;
}

export interface Error {
	name: string;
	message: string;
	stack?: string;
}

interface ErrorConstructor {
	new(message?: string): Error;
	(message?: string): Error;
	readonly prototype: Error;
}

export declare var Error: ErrorConstructor;

export declare class HttpExceptions extends Error {
	private readonly response;
	private readonly status;
	private readonly options?;

	constructor(response: string | Record<string, any>, status: number | Record<number, any>, options?: HttpExceptionOptions)
	cause: Error | undefined;

	initCause(): void;
	initMessage(): void;
	initName(): void;
	getResponse(): string | object;
	getStatus(): number;

	static createBody(objectOrErrorMessage: object | string, description?: string, statusCode?: number): object;
	static getDescriptionFrom(descriptionOrOptions: string | HttpExceptionOptions): string;
	static getHttpExceptionOptionsFrom(descriptionOrOptions: string | HttpExceptionOptions): HttpExceptionOptions;

	static extractDescriptionAndOptionsFrom(descriptionOrOptions: string | HttpExceptionOptions): DescriptionAndOptions;
}
