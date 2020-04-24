export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    server_url: process.env.SERVER_URL,
});