var webpack = require('webpack');

module.exports={
 entry :[
   'script!jquery/dist/jquery.min.js',
   'script!foundation-sites/dist/foundation.min.js',
   __dirname+'/app/app.jsx'
 ],
  externals :{
    jquery :'jQuery'
  },
  plugins :[
    new webpack.ProvidePlugin({
    '$' :'jquery',
    'jQuery': 'jquery'
  })
  ],
 output:{
   path:__dirname,
   filename:'public/bundle.js'
 },
 resolve:{
  modules: [ __dirname, 'node_modules'],
   alias: {
     Main : __dirname+'/app/components/Main.jsx',
     applicationStyles :__dirname+'/app/styles/app.scss',
     Navigation : __dirname+'/app/components/Navigation.jsx',
     CountDown : __dirname+'/app/components/CountDown.jsx',
     Timer : __dirname+'/app/components/Timer.jsx',
     Clock : __dirname+'/app/components/Clock.jsx',
     CountDownForm : __dirname+'/app/components/CountDownForm.jsx',
     Controls : __dirname+'/app/components/Controls.jsx'
   },
   extensions:['','.js','.jsx']
 },
 module: {
   loaders :[
     {
       loader :'babel-loader',
       query :{
         presets : ['react','es2015','stage-0']
       },
       test:/\.jsx?$/,
       exclude : /(node_modules|bower_components)/
     }
   ]
 },
  devtool :'cheap-module-eval-source-map'
};
