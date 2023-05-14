import { Request, Response } from "express";
import { Order } from "../../models/Order.model";

export async function changeOrderStatus(req: Request, res: Response) {
	try {
		const { id } = req.params;
		const { status } = req.body;

		// verify if values are into status param
		const statusOrder = ['WAITING','IN_PRODUCTION', 'DONE']

		if (!statusOrder.includes(status)) {
			return res.status(400).json({
				error: `Status should be one of these: ${statusOrder}`,
			})
		}

		await Order.findByIdAndUpdate(id, { status })
		//no-content
		res.sendStatus(204);
	}
	catch(error) {
		console.error(error);
		res.sendStatus(500);
	}
}
