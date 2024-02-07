import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Error',
  description: 'Page not found'
}

export default function NotFound() {

    return <>
    <section className="py-24">
      <div className="container">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-4xl font-semibold color-[#161c2d] mb-4">Trang không tồn tại</h1>
          <p className="mb-5 text-center text-muted">Liên kết có thể bị hỏng hoặc
            trang có thể đã bị xóa. Kiểm tra xem liên kết bạn đang cố mở có đúng
            không.</p>
          <div className="inline-block mx-auto text-center bg-primary py-2 px-4 rounded-md text-white font-semibold cursor-pointer">
            <a className="" href="/">Về trang chủ</a>
          </div>
        </div>
      </div>
    </section>
    </>
}