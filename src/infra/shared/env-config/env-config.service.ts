import * as dotenv from "dotenv";
import { join } from "node:path";
import { EnvConfig } from "./env-config.interface";

export class EnvConfigService implements EnvConfig {
	constructor(
		private readonly environment: string,
		private readonly envFile?: string,
	) {
		this.envFile = this.environment === 'production' ? '.env' : `.env.${this.environment}`;
		dotenv.config({
			path: join(__dirname, `../../../../${this.envFile}`),
		});
	}

	private static instance: EnvConfigService;
	public static getInstance(environment: string): EnvConfigService {
		if (!this.instance) return this.instance = new EnvConfigService(environment);
		else if (environment === '' || environment === null) throw new Error('Environment is not defined');
		return this.instance;
	}

	getAppPort(): number {
		return Number(process.env.PORT);
	}
	getNodeEnv(): string {
		return process.env.NODE_ENV ?? this.environment;
	}
	getDbConnectionEnv(uri: string): string {
		return process.env.DB_CONNECTION ?? uri;
	}
}
