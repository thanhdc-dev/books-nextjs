import Books from '@/components/books/Books';
import { Metadata } from 'next';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type TemplateProps = {
	title: string;
	description?: string;
	items: {
		name: string;
		link: string;
		image: {
			large: StaticImageData;
			medium: StaticImageData;
			small: StaticImageData;
		};
	}[];
};

const Template = ({ title, description, items }: TemplateProps) => {
	const Items = items.map((item, index) => {
		return (
			<div key={index} className="w-full px-4 md:w-1/2 xl:w-1/3">
				<div className="relative mb-12">
					<div className="overflow-hidden rounded-lg group border-[2px] border-gray aspect-[3/4] sm:aspect-[4/3] relative before:absolute before:hidden sm:before:block before:top-0 before:left-0 before:bg-[#00000033] before:w-full before:h-full">
						<picture>
							<source
								media="(min-width:768px)"
								srcSet={item.image.large.src}
								width={500}
								height={375}
							/>
							<source
								media="(min-width:576px)"
								srcSet={item.image.medium.src}
								width={520}
								height={390}
							/>
							<Image
								src={item.image.small.src}
								width={575}
								height={765}
								alt={`${item.name}`}
								className="absolute top-0 left-0 w-full h-auto group-hover:scale-105 transition-all object-cover"
								loading="lazy"
							/>
						</picture>
					</div>
					<div className="relative z-10 mx-7 -mt-12 rounded-lg bg-white p-3 sm:py-6 text-center shadow-lg">
						<h3 className="mb-4 text-xl font-bold text-dark">{item.name}</h3>
						<Link
							href={item.link}
							className="inline-block rounded-md border py-3 px-7 text-sm font-semibold transition hover:border-primary hover:bg-primary hover:text-white bg-primary text-white md:text-body-color md:bg-white"
						>
							View Demo
						</Link>
					</div>
				</div>
			</div>
		);
	});
	return (
		<section id="templates" className="pt-12 lg:pt-[90px]">
			<div className="container">
				<div className="-mx-4 flex flex-wrap">
					<div className="w-full px-4">
						<div className="mx-auto mb-[60px] max-w-[510px] text-center">
							<h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
								{title}
							</h2>
							{!!description && <p className="text-base text-body-color">{description}</p>}
						</div>
					</div>
				</div>
				<div className="-mx-4 flex flex-wrap">{Items}</div>
			</div>
		</section>
	);
};

export default function Home({ searchParams }: any) {
	console.log(searchParams);
	const templateData: TemplateProps = {
		title: 'Templates',
		items: [
			// {
			// 	name: 'WED-001',
			// 	link: 'templates/wed-001',
			// 	image: {
			// 		large: Template1LargeImage,
			// 		medium: Template1MediumImage,
			// 		small: Template1SmallImage,
			// 	},
			// },
		],
	};
	const data = {
		section_template: {
			active: true,
			data: templateData,
		},
	};

	return (
		<main id="main" className="pt-[52px]">
			{/* {data?.section_template?.active && <Template {...data.section_template.data} />} */}
			<Books />
		</main>
	);
}
