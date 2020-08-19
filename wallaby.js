module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
    ],
    tests: [
      'test/*.test.js',
    ],
    debug:true,
    trace: true,
    env: {
      type: 'node',
      runner: 'node',
    },
    compilers: {
      '**/*.js': wallaby.compilers.babel({}),
    }    
  };
};