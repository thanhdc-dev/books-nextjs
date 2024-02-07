import Image from 'next/image';

async function getBook(slug: string) {
	const res = await fetch(
		`https://script.google.com/macros/s/AKfycbzPp7VjoSHWC3A9X6JlDi948j-9izIfA7Y4cZg4gHbN0spzhrfvLu1K6aZvWP5e4UMX/exec?type=getBook&slug=${slug}`,
	);
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data book');
	}
	return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
	const book = await getBook(params.id);
	if (!book) {
		return <></>;
	}
	return (
		<div className="mx-4 py-8 flex">
			<div className="px-4 w-4/12">
				<div className="p-4 bg-white rounded-lg">
					<picture>
						<source media="(min-width:768px)" srcSet={book.image} width={500} height={375} />
						<Image
							src={book.image}
							width={575}
							height={765}
							alt={`${book.title}`}
							className="w-full h-auto transition-all object-cover"
							loading="lazy"
						/>
					</picture>
				</div>
			</div>
			<div className="px-4 w-8/12">
				<div className="p-4 bg-white rounded-lg">
					<p className="text-xl font-medium text-book-title">{book.title}</p>
					<p>Tác giả: </p>
					<p>Tình trạng: </p>
				</div>
			</div>
		</div>
	);
}
