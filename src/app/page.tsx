'use client'

import React, { LegacyRef } from 'react'

import { RootState } from '@/lib/store'
import { useSelector } from 'react-redux'
import VideoBackground from './_components/VideoBackground'

export default function Home() {
	const { isLoggedIn } = useSelector((state: RootState) => state.auth)

	return (
		<main className="min-h-screen w-full">
			<section id="hero" className="w-full min-h-screen">
				<VideoBackground />
			</section>
		</main>
	)
}
