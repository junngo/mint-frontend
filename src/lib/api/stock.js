import client from "./client";

export const readStockAndPrice = () =>
    client.get('/stock/all');
