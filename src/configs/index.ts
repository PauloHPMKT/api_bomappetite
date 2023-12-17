import { EnvConfigService } from "../infra/shared/env-config/env-config.service";

export const configs = {
	environment: EnvConfigService.getInstance('development'),
}
