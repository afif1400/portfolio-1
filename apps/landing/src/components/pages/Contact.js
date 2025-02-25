import React from 'react';

function ContactSection() {
	return (
		<div
			id='contact'
			className='page-section flex-center'
			style={{ backgroundColor: 'white', flexDirection: 'column' }}
		>
			<div style={{ margin: '0 auto 4rem auto', textAlign: 'center' }}>
				<h2 className='page-section-header'>Contact</h2>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-evenly',
						alignItems: 'center',
						fontSize: '2.5rem',
					}}
				>
					<a
						className='contact-links'
						style={{ margin: '10px' }}
						href='https://github.com/amaroklopcic'
					>
						<i className='fab fa-github'></i>
					</a>
					<a
						className='contact-links'
						style={{ margin: '10px' }}
						href='https://www.linkedin.com/in/amaroklopcic/'
					>
						<i className='fab fa-linkedin'></i>
					</a>
					<a
						className='contact-links'
						style={{ margin: '10px' }}
						href='mailto:amaroklopcic@outlook.com'
					>
						<i className='fas fa-envelope'></i>
					</a>
				</div>
			</div>
		</div>
	);
}

export default ContactSection;
