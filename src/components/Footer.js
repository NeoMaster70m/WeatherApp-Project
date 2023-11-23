import React from 'react'
import IconButton from '@mui/material/IconButton'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {
	return (
		<div className='footer'>
			<footer>
				<div className='container'>
					<div className='row'>
						<div className='col item social'>
							<IconButton
								style={{ backgroundColor: '#3b5998', padding: 5 }}
								href='https://www.facebook.com/'
								target='_blank'
							>
								<FacebookIcon />
							</IconButton>
							<IconButton
								style={{ backgroundColor: '#55acee', padding: 5 }}
								href='https://twitter.com/'
								target='_blank'
							>
								<TwitterIcon />
							</IconButton>
							<IconButton
								style={{ backgroundColor: '#333333', padding: 5 }}
								href='https://github.com/'
								target='_blank'
							>
								<GitHubIcon />
							</IconButton>
							<IconButton
								style={{ backgroundColor: '#0082ca', padding: 5 }}
								href='https://www.linkedin.com/'
								target='_blank'
							>
								<LinkedInIcon />
							</IconButton>
							<IconButton
								style={{ backgroundColor: '#ac2bac', padding: 5 }}
								href='https://www.instagram.com/'
								target='_blank'
							>
								<InstagramIcon />
							</IconButton>
						</div>
					</div>
					<p className='copyright'>
						Created by <b>Mussin Arystan</b> © 2023
					</p>
				</div>
			</footer>
		</div>
	)
}

export default Footer
