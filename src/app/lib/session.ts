import 'server-only';

const secretKey = process.env.SECRET_KEY;
const encodedKey = new TextEncoder().encode(secretKey);