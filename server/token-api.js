/**
 * Vitalia Token Billing System - Backend Reference (Node.js/Express)
 * This file provides the structured JSON logic for a real backend integration.
 */

const express = require('express');
const router = express.Router();

// Mock database models
const Wallet = {
  findOne: async (clinicId) => ({ token_balance: 500, total_spent: 250000 }),
  update: async (clinicId, update) => true
};

const Transaction = {
  create: async (data) => ({ id: `tx_${Date.now()}`, ...data }),
  findOne: async (id) => ({ id, status: 'pending', amount: 50000, qty: 100 })
};

// Pricing Logic (Extensible)
const TIER_PRICES = [
  { threshold: 10000, price: 350 }, // Future tier
  { threshold: 1000, price: 400 },
  { threshold: 0, price: 500 }
];

function getTokenPrice(quantity) {
  const tier = TIER_PRICES.find(t => quantity >= t.threshold);
  return tier ? tier.price : 500;
}

/**
 * @route   POST /tokens/purchase
 * @desc    Initialize a token purchase
 */
router.post('/purchase', async (req, res) => {
  const { clinicId, quantity } = req.body;
  
  if (!quantity || quantity < 10) {
    return res.status(400).json({ error: "Invalid quantity" });
  }

  const pricePerToken = getTokenPrice(quantity);
  const totalAmount = quantity * pricePerToken;

  const transaction = await Transaction.create({
    clinicId,
    type: 'purchase',
    qty: quantity,
    price_per_token: pricePerToken,
    amount_fcfa: totalAmount,
    status: 'pending',
    date: new Date()
  });

  res.json(transaction);
});

/**
 * @route   POST /tokens/confirm-payment
 * @desc    Webhook or user callback to confirm payment
 */
router.post('/confirm-payment', async (req, res) => {
  const { transactionId } = req.body;
  const transaction = await Transaction.findOne(transactionId);
  
  if (!transaction || transaction.status !== 'pending') {
    return res.status(400).json({ error: "Invalid transaction" });
  }

  // Update logic
  await Wallet.update(transaction.clinicId, {
    $inc: { 
      token_balance: transaction.qty,
      total_spent: transaction.amount_fcfa 
    }
  });

  transaction.status = 'paid';
  res.json({ success: true, balance: 'updated' });
});

/**
 * @route   GET /tokens/balance/:clinicId
 */
router.get('/balance/:clinicId', async (req, res) => {
  const wallet = await Wallet.findOne(req.params.clinicId);
  res.json(wallet);
});

/**
 * @route   POST /tokens/use
 */
router.post('/use', async (req, res) => {
  const { clinicId, reason } = req.body;
  const wallet = await Wallet.findOne(clinicId);

  if (wallet.token_balance <= 0) {
    return res.status(402).json({ 
      error: "INSUFFICIENT_TOKENS", 
      message: "Please recharge your wallet." 
    });
  }

  await Wallet.update(clinicId, { $inc: { token_balance: -1 } });
  
  await Transaction.create({
    clinicId,
    type: 'usage',
    qty: 1,
    status: 'confirmed',
    note: reason
  });

  res.json({ success: true });
});

module.exports = router;
