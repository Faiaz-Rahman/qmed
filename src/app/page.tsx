'use client'

import { RootState } from '@/lib/store'
import { useSelector } from 'react-redux'

import Video from 'next-video'
import doctors from '/videos/doctors.mp4'

export default function Home() {
	const { isLoggedIn } = useSelector((state: RootState) => state.auth)

	return (
		<main className="min-h-screen w-full">
			<section id="hero" className="w-full min-h-screen">
				<Video src={doctors} loop autoPlay controls={false} />
			</section>
		</main>
	)
}
