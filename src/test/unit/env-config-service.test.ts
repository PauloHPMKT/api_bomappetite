import { EnvConfigService } from "../../infra/shared/env-config/env-config.service";

const makeSut = (env?: string) => {
	const sut = new EnvConfigService(env ?? 'test');
	const serviceInstance = EnvConfigService;
	return {
		sut,
		serviceInstance,
	};
}

describe('EnvConfigService', () => {
	it('should test an instance sut is defined', () => {
		const { sut } = makeSut();
		expect(sut).toBeTruthy();
	});

	it('shoul create an instance of EnvConfigService', () => {
		const { sut } = makeSut();
		expect(sut).toBeInstanceOf(EnvConfigService);
	});

	it('should return the correct value for the var PORT', () => {
		const { sut } = makeSut();
		const port = sut.getAppPort();
		expect(port).toStrictEqual(3003);
		expect(port).not.toStrictEqual(3000 | 3001);
	});

	it('should return the correct type for the var PORT', () => {
		const { sut } = makeSut();
		const port = sut.getAppPort();
		expect(typeof port).toStrictEqual('number');
		expect(typeof port).not.toStrictEqual(['string', 'boolean']);
	});

	it('should return the correct value for the var DB_CONNECTION', () => {
		const { sut } = makeSut();
		const testUrl = 'mongodb://localhost:27017/test';
		const mongoUrl = sut.getDbConnectionEnv(testUrl);
		expect(mongoUrl).toStrictEqual('mongodb://localhost:27017/test');
		expect(typeof testUrl).toStrictEqual('string');
		expect(typeof testUrl).not.toMatch('number');
	})

	it('should return the correct value for the var NODE_ENV', () => {
		const { sut } = makeSut();
		const nodeEnv = sut.getNodeEnv();
		expect(nodeEnv).toStrictEqual('test');
	});

	it('should test environment return a value when NODE_ENV is defined', () => {
		const environment = (process.env.NODE_ENV = 'development')
		const { sut } = makeSut(environment);
		const nodeEnv = sut.getNodeEnv();
		expect(nodeEnv).toBeDefined();
		expect(nodeEnv).toStrictEqual(environment);

		process.env.NODE_ENV = 'test';
	});

	it('should test return the correct type for NODE_ENV', () => {
		const { sut } = makeSut();
		const nodeEnv = sut.getNodeEnv();
		expect(typeof nodeEnv).toStrictEqual('string');
		expect(typeof nodeEnv).not.toStrictEqual(['number', 'boolean']);
	});

	it('should test getInstance should return the same instance for the same environment', () => {
		const { serviceInstance } = makeSut();
		const instance1 = serviceInstance.getInstance('test');
		const instance2 = serviceInstance.getInstance('test');
		expect(instance1).toEqual(instance2);
	});

	it('should throw an error when calling getInstance without passing an environment', () => {
		const { serviceInstance } = makeSut();
		const environments = ['development', 'test', 'production'];
		const notDefinedEnvironments = ['', null];

		notDefinedEnvironments.forEach((env) => {
			if (!environments.includes(env as string)) {
				expect(() => serviceInstance.getInstance(env as string)).toThrow();
			}
		});
	});
});


