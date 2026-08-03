import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
 const videoRef = useRef();
 
 const isMobile = useMediaQuery({ maxWidth: 767 });
 
 useGSAP(() => {
	const heroSplit = new SplitText(".title", {
	 type: "chars, words",
	});
	
	const paragraphSplit = new SplitText(".subtitle", {
	 type: "lines",
	});
	
	// Apply text-gradient class once before animating
	heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
	
	gsap.from(heroSplit.chars, {
	 yPercent: 100,
	 duration: 1.8,
	 ease: "expo.out",
	 stagger: 0.06,
	});
	
	gsap.from(paragraphSplit.lines, {
	 opacity: 0,
	 yPercent: 100,
	 duration: 1.8,
	 ease: "expo.out",
	 stagger: 0.06,
	 delay: 1,
	});
	
	gsap
	.timeline({
	 scrollTrigger: {
		trigger: "#hero",
		start: "top top",
		end: "bottom top",
		scrub: true,
	 },
	})
	.to(".right-leaf", { y: 200 }, 0)
	.to(".left-leaf", { y: -200 }, 0)
	.to(".arrow", { y: 100 }, 0);
	
	const startValue = isMobile ? "top 50%" : "center 60%";
	const endValue = isMobile ? "120% top" : "bottom top";
	
	let tl = gsap.timeline({
	 scrollTrigger: {
		trigger: "video",
		start: startValue,
		end: endValue,
		// A small numeric scrub adds a touch of lag/interpolation instead of
		// snapping 1:1 to scroll position. Since the video can only seek to
		// its nearest keyframe, an instant scrub (scrub: true) makes every
		// keyframe jump feel like a stutter — the lag smooths that out.
		scrub: 1,
		pin: true,
	 },
	});
	
	// Add the scrub tween exactly once. Assigning to `.onloadedmetadata`
	// directly can end up firing more than once (effect re-runs, cached
	// video, etc.), which stacks a second currentTime:0→duration tween
	// right after the first on the same timeline — GSAP then plays the
	// full rotation twice (or more) across the same scroll range, which
	// looks like the can spinning several times. addEventListener with
	// `{ once: true }` guarantees this only ever attaches/fires one time.
	const addScrubTween = () => {
		tl.to(videoRef.current, {
			currentTime: videoRef.current.duration,
			ease: "none",
		});
	};

	if (videoRef.current.readyState >= 1) {
		// Metadata (and therefore duration) is already available — e.g. the
		// video was cached — so the "loadedmetadata" event already fired
		// and would never reach a listener attached now.
		addScrubTween();
	} else {
		videoRef.current.addEventListener("loadedmetadata", addScrubTween, {
			once: true,
		});
	}

	// Cleanup: if the component unmounts before metadata loads (HMR, fast
	// route changes, etc.), remove the listener so it can't fire later
	// against a stale/reverted GSAP context.
	return () => {
		videoRef.current?.removeEventListener("loadedmetadata", addScrubTween);
	};
 }, []);
 
 return (
	<>
	 <section id="hero" className="noisy">
		<h1 className="title">BREEZE</h1>
		
		<img
		 src="https://res.cloudinary.com/h5rywbkv/image/upload/v1785789300/hero-left-leaf_hluwku.png"
		 alt="left-leaf"
		 className="left-leaf"
		/>
		<img
		 src="https://res.cloudinary.com/h5rywbkv/image/upload/v1785789301/hero-right-leaf_s8vmqz.png"
		 alt="right-leaf"
		 className="right-leaf"
		/>
		
		<div className="body">
		 {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}
		 
		 <div className="content">
			<div className="space-y-5 hidden md:block">
			 <p>Fresh. Fizzy. Natural.</p>
			 <p className="subtitle">
				Sip the Spirit <br /> of Summer
			 </p>
			</div>
			
			<div className="view-cocktails">
			 <p className="subtitle">
				Every Cool Breeze flavor is a blend of real fruit, natural
				ingredients, and refreshing fizz — crafted to delight your
				senses, guilt-free.
			 </p>
			 <a href="#cocktails">View flavors</a>
			</div>
		 </div>
		</div>
	 </section>
	 
	 <div className="video-wrap">
		<video
		 ref={videoRef}
		 muted
		 playsInline
		 preload="auto"
		 src="https://res.cloudinary.com/h5rywbkv/video/upload/v1785791157/canva-video-scrub_kwpxmm.mp4"
		/>
	 </div>
	</>
 );
};

export default Hero;