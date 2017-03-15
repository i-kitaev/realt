import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

const NODE_ENV = process.env.NODE_ENV;
const isProduction = NODE_ENV === 'production';

const config = {
  moduleName: 'Realt',
  format: 'umd',
  plugins: [
    nodeResolve({
      jsnext: true
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    })
  ]
};

if (isProduction) {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
        screw_ie8: false
      },
      mangle: {
        screw_ie8: false
      },
      output: {
        screw_ie8: false
      }
    })
  );
}

export default config;
