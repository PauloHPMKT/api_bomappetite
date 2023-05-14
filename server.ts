import { server } from "./src/app";

const PORT = 3008

server.listen(PORT, () => {
	console.log(`Server is running on port http://localhost:${PORT}`)
});
