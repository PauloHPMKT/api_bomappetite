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

	it('should return the correct value for the var DB_CONNECTION', () => {
		const sut = makeSut();
		const testUrl = 'mongodb://localhost:27017/test';
		const mongoUrl = sut.getDbConnectionEnv(testUrl);
		expect(mongoUrl).toStrictEqual('mongodb://localhost:27017/test');
	})
});;


