import Image from 'next/image';
import Link from 'next/link';
import Pagination from '../pagination/Pagination';

type GetBookProps = {
	page?: number;
	itemsPerPage?: number;
};

async function getBooks(params: GetBookProps) {
	const { page, itemsPerPage } = params;
	const res = await fetch(
		`https://script.google.com/macros/s/AKfycbzPp7VjoSHWC3A9X6JlDi948j-9izIfA7Y4cZg4gHbN0spzhrfvLu1K6aZvWP5e4UMX/exec?type=getBooks&page=${
			page ?? 1
		}&itemsPerPage=${itemsPerPage ?? 10}`,
		{
			next: {
				revalidate: 0,
			},
		},
	);
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data books');
	}
	return res.json();
}

type BookProps = {
	title: string;
	slug: string;
	image: string;
	excerpt: string;
	content: string;
};

const Book = (params: BookProps) => {
	const { title, slug, image, excerpt, content } = params;
	return (
		<div className="w-full px-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
			<div className="relative mb-12">
				<div className="overflow-hidden rounded-t-lg group border-[2px] border-gray aspect-[3/4] sm:aspect-[4/3] relative before:absolute before:hidden sm:before:block before:top-0 before:left-0 before:bg-[#00000033] before:w-full before:h-full">
					<Link className="block" href={`/book/${slug}`}>
						<picture>
							<source media="(min-width:768px)" srcSet={image} width={500} height={375} />
							<Image
								src={image}
								width={575}
								height={765}
								alt={`${title}`}
								className="absolute top-0 left-0 w-full h-auto group-hover:scale-105 transition-all object-cover"
								loading="lazy"
							/>
						</picture>
					</Link>
				</div>
				<div className="rounded-lg bg-white p-3 sm:py-6 shadow-lg">
					<h3 className="mb-4 text-xl font-bold text-dark">
						<Link href={`/book/${slug}`}>{title}</Link>
					</h3>
					<p className="mb-0">{excerpt}</p>
				</div>
			</div>
		</div>
	);
};

export default async function Books() {
	const resBook = await getBooks({});
	const currentPage = resBook.currentPage || 1;
	const totalPages = resBook.totalPages || 10;
	const books = resBook.data || [];
	console.log(books);
	const Items = books.map((book: any) => {
		return <Book key={book.id} {...book} />;
	});
	return (
		<>
			<div className="-mx-4 flex flex-wrap justify-center">{Items}</div>
			<Pagination totalPages={totalPages} currentPage={currentPage} />
		</>
	);
}
