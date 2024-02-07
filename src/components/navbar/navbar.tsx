'use client';

import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';
import styles from './style.module.css';

export type NavBarProps = {
	sections: {
		id: string;
		title: string;
		url: string;
	}[];
};

export default function Navbar() {
	type Menu = {
		id: string;
		label: string;
		href: string;
		external: boolean;
		badge: string;
	};
	const leftMenus: Menu[] = [];

	const rightMenus: Menu[] = [];

	const mobileMenus = [...leftMenus, ...rightMenus];

	return (
		<nav className="fixed top-0 left-0 right-0 bg-white z-50">
			<Disclosure>
				{({ open }) => (
					<>
						<div className="flex flex-wrap justify-between md:flex-nowrap md:gap-10 py-1">
							<div className="order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row md:justify-end">
								{leftMenus.map((item, index) => (
									<LinkScroll
										to={item.id}
										spy
										smooth
										offset={-50}
										duration={500}
										activeClass={styles.menuActive}
										href={item.href}
										key={item.id}
										className="px-5 py-2 text-xl font-medium rounded-lg mx-1 text-gray-600 hover:text-white focus:text-white hover:bg-primary"
										target={item.external ? '_blank' : ''}
										rel={item.external ? 'noopener' : ''}
									>
										<span>{item.label}</span>
										{item.badge && (
											<span className="ml-2 rounded bg-blue-100 px-2 py-0.5 text-xs font-semibold text-primary dark:bg-cyan-200">
												{item.badge}
											</span>
										)}
									</LinkScroll>
								))}
							</div>
							<div className="flex w-full items-center justify-between md:w-auto">
								<Link
									href="/"
									className="px-2 w-max text-2xl text-primary hover:text-primary font-extrabold"
								>
									<span className="px-2 text-center">Book +</span>
								</Link>
								<Disclosure.Button
									aria-label="Toggle Menu"
									className="ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-primary focus:outline-none md:hidden"
								>
									<svg
										className="h-6 w-6 fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
									>
										{open && (
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
											/>
										)}
										{!open && (
											<path
												fillRule="evenodd"
												d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
											/>
										)}
									</svg>
								</Disclosure.Button>
							</div>

							<div className="order-2 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row">
								{rightMenus.map((item, index) => (
									<LinkScroll
										to={item.id}
										spy
										smooth
										offset={0}
										duration={500}
										activeClass={styles.menuActive}
										href={item.href}
										key={item.id}
										className="px-5 py-2 text-xl font-medium rounded-lg mx-1 text-gray-600 hover:text-white focus:text-white hover:bg-primary"
										target={item.external ? '_blank' : ''}
										rel={item.external ? 'noopener' : ''}
									>
										<span> {item.label}</span>
										{item.badge && (
											<span className="ml-2 rounded bg-blue-100 px-2 py-0.5 text-xs font-semibold text-primary dark:bg-cyan-200">
												{item.badge}
											</span>
										)}
									</LinkScroll>
								))}
							</div>
						</div>
						<Disclosure.Panel>
							<div className="order-2 mt-4 flex w-full flex-col items-center justify-start md:hidden">
								{mobileMenus.map((item, index) => (
									<LinkScroll
										to={item.id}
										spy
										smooth
										offset={0}
										duration={500}
										activeClass={styles.menuActive}
										href={item.href}
										key={item.id}
										className="w-full px-5 py-2 text-base font-semibold text-gray-600 hover:text-primary"
										target={item.external ? '_blank' : ''}
										rel={item.external ? 'noopener' : ''}
									>
										{item.label}
									</LinkScroll>
								))}
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</nav>
	);
}
