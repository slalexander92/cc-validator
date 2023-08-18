import express, { Request, Response } from 'express';
import { creditCardService } from '../services/credit-card.service';

const router = express.Router();

router.post('/cc-validate', (req: Request, res: Response) => {
  const { body } = req;
  const { number, cvv, exp } = body;
  const genericCardError = 'Invalid card data, please try again';

  const hasEmptyValues = [number, cvv, exp].some(val => !val);
  const isValidCard = creditCardService.validateCardNumber(number);

  if (hasEmptyValues || !isValidCard) {
    return res.send({
      status: 422,
      data: false,
      message: genericCardError,
    });
  }

  return res.send({
    status: 200,
    data: true,
    message: 'Card is Valid',
  });
});


export default router;
