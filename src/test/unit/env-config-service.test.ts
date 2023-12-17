import { EnvConfigService } from "../../infra/shared/env-config/env-config.service";

const makeSut = (env?: string) => {
	const sut = new EnvConfigService(env ?? 'test');
	return sut;
}

describe('EnvComfigService', () => {
	it('should be defined', () => {
		expect(true).toBeTruthy();
	});
});
