'use client';

import { useState } from 'react'
import { openingHours, socials, storeInfo } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const initialForm = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
	const [form, setForm] = useState(initialForm);
	const [errors, setErrors] = useState({});
	const [status, setStatus] = useState('idle'); // idle | submitting | success | error

	useGSAP(() => {
		const titleSplit = SplitText.create('#contact h2', { type: 'words' });

		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: '#contact',
				start: 'top 75%',
			},
			ease: "power1.inOut"
		})

		timeline
			.from(titleSplit.words, {
				opacity: 0, yPercent: 100, stagger: 0.02
			})
			.from('.contact-header p, .contact-info, .contact-form-wrapper form', {
				opacity: 0, y: 30, stagger: 0.08
			}, '-=0.3')
			.to('#f-right-leaf', {
				y: '-50', duration: 1, ease: 'power1.inOut'
			}).to('#f-left-leaf', {
				y: '-50', duration: 1, ease: 'power1.inOut'
			}, '<')
	})

	const validate = () => {
		const next = {};
		if (!form.name.trim()) next.name = 'Please enter your name';
		if (!form.email.trim()) {
			next.email = 'Please enter your email';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
			next.email = 'Please enter a valid email';
		}
		if (!form.message.trim()) next.message = 'Please enter a message';
		setErrors(next);
		return Object.keys(next).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validate()) return;

		setStatus('submitting');
		try {
			// Replace this with your real endpoint (API route, form service, etc.)
			await new Promise((resolve) => setTimeout(resolve, 900));
			setStatus('success');
			setForm(initialForm);
		} catch (err) {
			setStatus('error');
		}
	};

	return (
		<footer id="contact">
			<img src="https://res.cloudinary.com/h5rywbkv/image/upload/v1785789300/footer-right-leaf_kevdlo.png" alt="leaf-right" id="f-right-leaf" />
			<img src="https://res.cloudinary.com/h5rywbkv/image/upload/v1785789299/footer-left-leaf_x91dsh.png" alt="leaf-left" id="f-left-leaf" />

			<div className="content">
				<div className="contact-header">
					<span className="eyebrow">Get in touch</span>
					<h2>{storeInfo.heading}</h2>
					<p>
						Have a question about a flavor, a bulk order, or just want to say hi?
						Send us a message and our team will get back to you shortly.
					</p>
				</div>

				<div className="contact-grid">
					<div className="contact-info">
						<div className="info-section">
							<h3>Visit Us</h3>
							<p>{storeInfo.address}</p>
						</div>

						<div className="info-section">
							<h3>Contact Us</h3>
							<p>{storeInfo.contact.phone}</p>
							<p>{storeInfo.contact.email}</p>
						</div>

						<div className="info-section">
							<h3>Open Every Day</h3>
							{openingHours.map((time) => (
								<p key={time.day}>
									{time.day} : {time.time}
								</p>
							))}
						</div>

						<div className="info-section">
							<h3>Socials</h3>
							<div className="socials">
								{socials.map((social) => (
									<a
										key={social.name}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={social.name}
									>
										<img src={social.icon} alt="" />
									</a>
								))}
							</div>
						</div>
					</div>

					<div className="contact-form-wrapper">
						<form onSubmit={handleSubmit} noValidate>
							<div className="form-row">
								<div className={`field ${errors.name ? 'has-error' : ''}`}>
									<label htmlFor="name">Name</label>
									<input
										id="name"
										name="name"
										type="text"
										placeholder="Your name"
										value={form.name}
										onChange={handleChange}
									/>
									{errors.name && <span className="error-text">{errors.name}</span>}
								</div>

								<div className={`field ${errors.email ? 'has-error' : ''}`}>
									<label htmlFor="email">Email</label>
									<input
										id="email"
										name="email"
										type="email"
										placeholder="you@example.com"
										value={form.email}
										onChange={handleChange}
									/>
									{errors.email && <span className="error-text">{errors.email}</span>}
								</div>
							</div>

							<div className="field">
								<label htmlFor="subject">Subject</label>
								<input
									id="subject"
									name="subject"
									type="text"
									placeholder="Reservation, event, feedback..."
									value={form.subject}
									onChange={handleChange}
								/>
							</div>

							<div className={`field ${errors.message ? 'has-error' : ''}`}>
								<label htmlFor="message">Message</label>
								<textarea
									id="message"
									name="message"
									rows={5}
									placeholder="Tell us how we can help"
									value={form.message}
									onChange={handleChange}
								/>
								{errors.message && <span className="error-text">{errors.message}</span>}
							</div>

							<button type="submit" disabled={status === 'submitting'}>
								{status === 'submitting' ? 'Sending...' : 'Send message'}
							</button>

							{status === 'success' && (
								<p className="status-message">Thanks! We'll be in touch soon.</p>
							)}
							{status === 'error' && (
								<p className="status-message text-red-400">
									Something went wrong. Please try again.
								</p>
							)}
						</form>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Contact