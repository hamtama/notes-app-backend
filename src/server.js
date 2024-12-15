    const Hapi = require('@hapi/hapi');
    const routes = require('./routes');

    const {
        ORDER_SERVICE_PORT = 4000,
        USER_SERVICE_PORT = 5000,
        } = process.env;
         
        const orderService = `http://localhost:${ORDER_SERVICE_PORT}`;
        const userService = `http://localhost:${USER_SERVICE_PORT}`;

    const init = async () => {
        const server = Hapi.server({
            port: 5000,
            host: 'localhost',
            routes: {
                cors: {
                    origin: ['http://notesapp-v1.dicodingacademy.com'],
                    // credentials: true
                },
            },
        });

        server.route(routes);

        await server.start();
            console.log(`Server berjalan pada ${server.info.uri}`);
        };

    init();