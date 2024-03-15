module.exports = {
    apps: [
        {
            name: 'vote-api',
            script: 'serve -s build -p 3001',
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'production',
            },
        },
    ],
};
