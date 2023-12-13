import { App } from "./app";
import { EnvConfigService } from "./infra/shared/env-config/env-config.service";

const envConfigService = new EnvConfigService('development');
const port = envConfigService.getAppPort();

const app = new App();

app.start(port);
