import client from "./client";

export const readStockAndPrice = () =>
    client.get('/stock/all');

export const readPortfolio = () =>
    client.get('/stock/portfolio/1')
