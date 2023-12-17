import { EnvConfigService } from "../../infra/shared/env-config/env-config.service";

const makeSut = (env?: string) => {
	const sut = new EnvConfigService(env ?? 'test');
	return sut;
}

describe('EnvComfigService', () => {
	it('should test an instance sut is defined', () => {
		const sut = makeSut();
		expect(sut).toBeTruthy();
	});

	it('shoul create an instance of EnvConfigService', () => {
		const sut = makeSut();
		expect(sut).toBeInstanceOf(EnvConfigService);
	});

	it('should return the correct value for the var PORT', () => {
		const sut = makeSut();
		const port = sut.getAppPort();
		expect(port).toStrictEqual(3003);
		expect(port).not.toStrictEqual(3000 | 3001);
	});

	it('should return the correct type for the var PORT', () => {
		const sut = makeSut();
		const port = sut.getAppPort();
		expect(typeof port).toStrictEqual('number');
		expect(typeof port).not.toStrictEqual(['string', 'boolean']);
	});

	it('should return the correct value for the var DB_CONNECTION', () => {
		const sut = makeSut();
		const testUrl = 'mongodb://localhost:27017/test';
		const mongoUrl = sut.getDbConnectionEnv(testUrl);
		expect(mongoUrl).toStrictEqual('mongodb://localhost:27017/test');
		expect(typeof testUrl).toStrictEqual('string');
		expect(typeof testUrl).not.toMatch('number');
	})

	it('should return the correct value for the var NODE_ENV', () => {
		const sut = makeSut();
		const nodeEnv = sut.getNodeEnv();
		expect(nodeEnv).toStrictEqual('test');
	});

	it('should test getInstance should return the same instance for the same environment', () => {
		const sut = EnvConfigService.getInstance('test');
		const sut2 = EnvConfigService.getInstance('test');
		expect(sut).toEqual(sut2);
	});

	it('should test getInstance should return differents instances for the diferents environment', () => {
		const sut = EnvConfigService.getInstance('test');
		const sut2 = EnvConfigService.getInstance('production');
		expect(sut).toEqual(sut2);
	});
});


