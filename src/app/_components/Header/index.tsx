'use client'

import React from 'react'

interface HeaderProps {}

const navLinks = ['Solutions', 'Who we serve', 'Resources', 'Company']

export default function Header() {
	const [focused, setFocused] = React.useState<string>('')

	return (
		<nav className="z-20 fixed w-full self-center flex justify-center h-24 text-white">
			<div className="w-[75%] flex justify-between">
				<div className="w-[70%] flex items-center gap-5">
					<p className="font-extralight text-5xl tracking-wide">QMED</p>
					{navLinks.map((_nav, _nav_ind) => {
						return (
							<div key={`${_nav}_${_nav_ind}`} className="h-11">
								<div
									className="h-10 flex items-center 
                                hover:cursor-pointer px-2 text-base"
									onMouseOver={() => {
										setFocused(_nav)
									}}
									onMouseLeave={() => {
										setFocused('')
									}}
								>
									{_nav}
								</div>
								{focused === _nav ? (
									<div className="h-1 w-full bg-white rounded-md"></div>
								) : null}
							</div>
						)
					})}
				</div>
				<div
					className="w-[20%] flex text-xl items-center justify-end
                    hover:cursor-pointer hover:underline
                "
				>
					Login
				</div>
			</div>
		</nav>
	)
}
