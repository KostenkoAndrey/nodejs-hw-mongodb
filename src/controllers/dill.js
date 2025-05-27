import { dillService } from '../services/dill.js';

export const dillController = async (req, res) => {
  const { wallet } = req.params;
  const poolsByWallet = await dillService(wallet);

  res.status(200).json({
    status: 200,
    message: `Successfully found dill pools by wallet`,
    data: poolsByWallet,
  });
};
