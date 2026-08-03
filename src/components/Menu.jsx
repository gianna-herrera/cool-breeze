'use client';

import { allCocktails } from '../../constants/index.js'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Menu = () => {
 const contentRef = useRef();
 const [currentIndex, setCurrentIndex] = useState(0);
 
 useGSAP(() => {
	gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
	gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, {
	 xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
	})
	gsap.fromTo('.details h2', { yPercent: 100, opacity: 0 }, {
	 yPercent: 0, opacity: 100, ease: 'power1.inOut'
	})
	gsap.fromTo('.details p', { yPercent: 100, opacity: 0 }, {
	 yPercent: 0, opacity: 100, ease: 'power1.inOut'
	})
 }, [currentIndex]);
 
 const totalCocktails = allCocktails.length;
 
 const goToSlide = (index) => {
	const newIndex = (index + totalCocktails) % totalCocktails;
	
	setCurrentIndex(newIndex);
 }
 
 const getCocktailAt = (indexOffset) => {
	return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
 }
 
 const currentCocktail = getCocktailAt(0);
 const prevCocktail = getCocktailAt(-1);
 const nextCocktail = getCocktailAt(1);
 
 return (
	<section id="menu" aria-labelledby="menu-heading">
	 <img src="https://res.cloudinary.com/h5rywbkv/image/upload/v1785789306/slider-left-leaf1_h1avb3.png" alt="left-leaf" id="m-left-leaf" />
	 <img src="https://res.cloudinary.com/h5rywbkv/image/upload/v1785789306/slider-right-leaf_tjbaao.png" alt="right-leaf" id="m-right-leaf" />
	 
	 <h2 id="menu-heading" className="sr-only">
		Flavor Menu
	 </h2>
	 
	 <nav className="cocktail-tabs" aria-label="Flavor Navigation">
		{allCocktails.map((cocktail, index) => {
		 const isActive = index === currentIndex;
		 
		 return (
			<button
			 key={cocktail.id}
			 className={
				isActive
				 ? 'bg-yellow text-black shadow-sm'
				 : 'text-white/60 hover:text-white hover:bg-white/10'
			 }
			 onClick={() => goToSlide(index)}
			>
			 {cocktail.name}
			</button>
		 )
		})}
	 </nav>
	 
	 <div className="content">
		<div className="arrows">
		 <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
			<span>{prevCocktail.name}</span>
			<img src="https://res.cloudinary.com/h5rywbkv/image/upload/v1785789305/right-arrow_tjrxeg.png" alt="right-arrow" aria-hidden="true" />
		 </button>
		 
		 <button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
			<span>{nextCocktail.name}</span>
			<img src="https://res.cloudinary.com/h5rywbkv/image/upload/v1785789301/left-arrow_slvb05.png" alt="left-arrow" aria-hidden="true" />
		 </button>
		</div>
		
		<div className="cocktail">
		 <img src={currentCocktail.image} className="object-contain"/>
		</div>
		
		<div className="recipe">
		 <div ref={contentRef} className="info">
			<p>Featured flavor:</p>
			<p id="title">{currentCocktail.name}</p>
		 </div>
		 
		 <div className="details">
			<h2>{currentCocktail.title}</h2>
			<p>{currentCocktail.description}</p>
		 </div>
		</div>
	 </div>
	</section>
 )
}
export default Menu