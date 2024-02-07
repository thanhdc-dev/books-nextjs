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
export default async function Book({ slug }: { slug: string }) {
	const book = await getBook(slug);
    console.log(book);
	return <p>{book.title}</p>;
}
