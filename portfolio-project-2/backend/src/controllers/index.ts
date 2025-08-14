export class IndexController {
    public async getPortfolio(req: Request, res: Response): Promise<void> {
        try {
            // Logic to retrieve portfolio data
            const portfolioData = await Portfolio.findAll();
            res.status(200).json(portfolioData);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving portfolio data', error });
        }
    }

    public async updatePortfolio(req: Request, res: Response): Promise<void> {
        try {
            const updatedData = req.body;
            // Logic to update portfolio data
            const result = await Portfolio.update(updatedData);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error updating portfolio data', error });
        }
    }
}