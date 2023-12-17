import { App } from "./app";
import { configs } from './configs';

const envConfigService = configs.environment;
const port = envConfigService.getAppPort();

const app = new App();

app.start(port);
