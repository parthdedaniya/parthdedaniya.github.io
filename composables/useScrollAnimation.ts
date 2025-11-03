import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useScrollAnimation = () => {
	const { $gsap, $ScrollTrigger } = useNuxtApp();

	const animateOnScroll = (element: string | HTMLElement, animation: any) => {
		if (typeof window === "undefined" || !$gsap || !$ScrollTrigger) return;

		return $gsap.fromTo(element, animation.from || { opacity: 0, y: 50 }, {
			...(animation.to || { opacity: 1, y: 0 }),
			scrollTrigger: {
				trigger: element,
				start: "top 80%",
				end: "bottom 20%",
				toggleActions: "play none none reverse",
				...animation.scrollTrigger,
			},
			...animation.animation,
		});
	};

	const parallax = (element: string | HTMLElement, speed: number = 0.5) => {
		if (typeof window === "undefined" || !$gsap || !$ScrollTrigger) return;

		return $gsap.to(element, {
			y: speed * 100,
			ease: "none",
			scrollTrigger: {
				trigger: element,
				start: "top bottom",
				end: "bottom top",
				scrub: true,
			},
		});
	};

	const fadeInUp = (element: string | HTMLElement, delay: number = 0) => {
		return animateOnScroll(element, {
			from: { opacity: 0, y: 50 },
			to: { opacity: 1, y: 0 },
			animation: { delay, duration: 0.8, ease: "power2.out" },
		});
	};

	const scaleIn = (element: string | HTMLElement, delay: number = 0) => {
		return animateOnScroll(element, {
			from: { opacity: 0, scale: 0.8 },
			to: { opacity: 1, scale: 1 },
			animation: { delay, duration: 0.6, ease: "back.out(1.7)" },
		});
	};

	return {
		animateOnScroll,
		parallax,
		fadeInUp,
		scaleIn,
	};
};
