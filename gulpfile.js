var gulp = require('gulp'),
    webpack = require('gulp-webpack');

gulp.task('default', function() {
    return webpack({
            entry:{
                login: ['./app/components/login/index.jsx', './app/components/login/main.jsx']
            },
            output: {
                // path: 'public/assets/js',
                filename: '[name].js'
            },
            module: {
                loaders: [{
                    test: /\.jsx$/,
                    loader: 'babel-loader',
                    query: {
                        presets:['react']
                    }
                }]
            },
            externals: {
                'react': 'React'
            },
            resolve: {
                extensions: ['', '.js', '.jsx']
            }
        })
        .pipe(gulp.dest('public/assets/js'));
});