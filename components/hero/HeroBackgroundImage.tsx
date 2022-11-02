import Image from 'next/image';
import { useEffect, useState } from 'react';
import HeroImage from '../../public/hero-zuerich.webp';

function HeroBackgroundImage() {
	return (
		<Image
			src={HeroImage}
			alt="Hero Image"
			className="absolute h-screen w-screen object-cover sm:object-fill"
			placeholder="blur"
			priority
		/>
	);
}

export default HeroBackgroundImage;
