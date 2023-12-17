export interface EnvConfig {
	getAppPort(): number;
	getNodeEnv(): string;
	getDbConnectionEnv(uri?: string): string;
}
