import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

const Bio = props => (
	<div
		style={{
			display: 'flex',
			marginBottom: rhythm(2.5),
		}}
	>
		<p>
			We are two developers crafting open source projects for fun and maybe
			profit. <br />
			Wanna talk with us?{' '}
			<a href="https://spectrum.chat/marge-apps">
				We are available at Spectrum
			</a>
		</p>
	</div>
)
export default Bio
