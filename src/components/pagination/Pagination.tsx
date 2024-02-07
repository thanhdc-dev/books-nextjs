'use client';
import { Icon } from '@iconify/react';
import Link from 'next/link';

type Pagination = {
	totalPages: number;
	currentPage: number;
}

function Pagination(props: Pagination) {
	const { totalPages, currentPage } = props;
	let pageList = [];

	if (totalPages <= 5) {
		for (let i = 1; i <= totalPages; i++) {
			pageList.push(i);
		}
	} else {
		switch (currentPage) {
			case 1:
			case 2:
				pageList = [1, 2, 3, 4, 5];
				break;
			case totalPages:
			case totalPages - 1:
			case totalPages - 2:
				pageList = [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
				break;

			default:
				pageList = [
					currentPage - 2,
					currentPage - 1,
					currentPage,
					currentPage + 1,
					currentPage + 2,
				];
				break;
		}
	}

	return (
		<div className="my-10">
			<nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
				<Link
					href={`?page=1`}
					className={`bg-black hover:bg-primary text-white hover:text-black px-2 py-2 font-semibold border-white border border-solid ${
						currentPage == 1 ? `hidden` : ''
					}`}
				>
					<Icon icon="ci:chevron-left-duo" className="text-xl" />
				</Link>
				<Link
					href={`?page=${currentPage - 1}`}
					className={`bg-black hover:bg-primary text-white hover:text-black px-2 py-2 font-semibold border-white border border-solid ${
						currentPage == 1 ? `hidden` : ''
					}`}
				>
					<Icon icon="material-symbols:chevron-left" className="text-xl" />
				</Link>
				{pageList.map((page, key) => {
					return (
						<Link
							key={key}
							href={`?page=${page}`}
							className={`hover:bg-primary hover:text-black text-center w-[40px] px-2 py-2 text-sm font-semibold border-white border border-solid ${
								currentPage == page ? `bg-primary text-black` : 'bg-black text-white'
							}`}
						>
							{page}
						</Link>
					);
				})}
				<Link
					href={`?page=${currentPage + 1}`}
					className={`bg-black hover:bg-primary text-white hover:text-black px-2 py-2 font-semibold border-white border border-solid ${
						currentPage == totalPages ? `hidden` : ''
					}`}
				>
					<span className="sr-only">Next</span>
					<Icon icon="material-symbols:chevron-right" className="text-xl" />
				</Link>
				<Link
					href={`?page=${totalPages}`}
					className={`bg-black hover:bg-primary text-white hover:text-black px-2 py-2 font-semibold border-white border border-solid ${
						currentPage == totalPages ? `hidden` : ''
					}`}
				>
					<Icon icon="ci:chevron-right-duo" className="text-xl" />
				</Link>
			</nav>
		</div>
	);
}

export default Pagination;
