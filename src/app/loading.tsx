export default function Loading() {
    return (
		<div
			className="w-full h-full bg-white fixed top-0 left-0 z-50 flex justify-center items-center"
		>
			<div className="lds-heart inline-block relative w-[64px] h-[64px] rotate-45 origin-[32px_32px]">
				<div className="animate-heartBeat absolute top-[23px] left-[19px] w-[26px] h-[26px] bg-primary before:absolute before:block before:w-[26px] before:h-[26px] before:bg-primary before:-left-[17px] before:rounded-tl-full before:rounded-bl-full after:absolute after:block after:w-[26px] after:h-[26px] after:bg-primary after:rounded after:-top-[17px] after:rounded-tl-full after:rounded-tr-full"></div>
			</div>
		</div>
	);
}