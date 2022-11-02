import Image from 'next/image';
import { useEffect, useState } from 'react';
import HeroImage from '../../public/hero-zuerich.jpg';

function HeroBackgroundImage() {
	return (
		<Image src={HeroImage} alt="Hero Image" className="absolute h-screen w-screen" />
	);
}

export default HeroBackgroundImage;
