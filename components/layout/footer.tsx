"use client"

import Link from 'next/link'
import { Facebook, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Trường Hy Vọng Bình Thạnh</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>25 Nguyễn Văn Lạc, Phường 21, Bình Thạnh, TP.HCM</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:02812345678">028 1234 5678</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:info@truonghyvongbinhthanh.edu.vn">info@truonghyvongbinhthanh.edu.vn</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Liên kết nhanh</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/gioi-thieu">Giới thiệu</Link>
              </li>
              <li>
                <Link href="/tin-tuc">Tin tức & Sự kiện</Link>
              </li>
              <li>
                <Link href="/tuyen-sinh">Tuyển sinh</Link>
              </li>
              <li>
                <Link href="/lien-he">Liên hệ</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Mạng xã hội</h3>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://facebook.com/Trường-khiếm-thính-Hy-Vọng-Bình-Thạnh-100064870655160"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Bản đồ</h3>
            <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674797143!2d106.69041021531906!3d10.777638362124085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3a9d8d1bb3%3A0xc4b3b6e3f844a8e8!2zVHLGsOG7nW5nIEh5IFbhu41uZyBCw6xuaCBUaOG6oW5o!5e0!3m2!1svi!2s!4v1629789245684!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center">
          <p>© 2024 Trường Hy Vọng Bình Thạnh. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}