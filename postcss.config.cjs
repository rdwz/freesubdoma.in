const postcssJitProps = require('postcss-jit-props');
const OpenProps = require('open-props');

module.exports = {
	plugins: [
		require('autoprefixer'),
		postcssJitProps(OpenProps),
	]
}