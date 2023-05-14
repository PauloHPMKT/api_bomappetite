import 'dotenv/config';
import { server } from "./src/app";

const port = process.env.PORT

server.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}`)
});
