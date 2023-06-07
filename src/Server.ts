import { App } from './App';
import { APP_CONFIG } from './config/Env';

try {
  const app = new App();
	const port = APP_CONFIG.PORT;

	app.createExpressServer(port);
} catch (err) {
	console.error(err);	 
}