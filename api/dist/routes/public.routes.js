"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const credit_card_service_1 = require("../services/credit-card.service");
const router = express_1.default.Router();
router.post('/cc-validate', (req, res) => {
    const { body } = req;
    const { number, cvv, exp } = body;
    const genericCardError = 'Invalid card data, please try again';
    const hasEmptyValues = [number, cvv, exp].some(val => !val);
    const isValidCard = credit_card_service_1.creditCardService.validateCardNumber(number);
    if (hasEmptyValues || !isValidCard) {
        return res.send({
            status: 422,
            data: null,
            message: genericCardError,
        });
    }
    return res.send({
        status: 200,
        data: 'Card is Valid',
        message: null,
    });
});
exports.default = router;
