import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import compressor from 'astro-compressor'
import robots from 'astro-robots'
import sitemap from 'astro-sitemap'

// https://astro.build/config
export default defineConfig({
	integrations: [
		compress(),
		compressor(),
		robots(),
		sitemap()
	],
	site: 'https://freedomain.directory'
})