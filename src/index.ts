import express from 'express';

const app = express();

const PORT = 3008

app.listen(PORT, () => {
	console.log(`Server is running on port http://localhost:${PORT}`)
})
