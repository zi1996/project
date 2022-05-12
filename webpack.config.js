const currentTask = process.env.npm_lifecycle_event
const path = require('path')

let config = {
    entry: './app/assets/scripts/App.js',
    module: {
        rules: [
            {
                test: /\.css$/i,
            use: ['style-loader','css-loader', 'postcss-loader']
            }
        ]
    }
}

if(currentTask == "dev"){
    config.output = {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    }
    config.devServer =  {
        onBeforeSetupMiddleware: function(devServer) {
            devServer.app.get('./app/**/*.html', function(app, server){
                res.json({ custom: watch})
            })
        },
        static: {
            directory: path.join(__dirname, "app")
        },
        hot: true,
        port: 3000
    }
    config.mode = "development"
}

if(currentTask == "build"){
    config.output = {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'dist')
    }
    config.mode = "production"
    
}




module.exports = config