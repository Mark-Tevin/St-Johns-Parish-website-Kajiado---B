import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-sky-50 text-gray-900 text-sm border-t border-sky-100">
      <div className="container py-8 md:py-12">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold text-sky-900">St. John's Parish Kajiado</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Opposite KCB Ground
              <br />
              Near Total Petrol Station
              <br />
              Kajiado Central, Kajiado County, Kenya
            </p>
            <p className="text-sm text-gray-600">Email: stjohnscatholicparish@gmail.com</p>
          </div>
          <div>
            <h4 className="mb-4 font-serif text-base font-semibold text-sky-900">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/mass-times" className="text-gray-600 hover:text-sky-600 transition-colors">
                  Mass Times
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-sky-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/daily-readings" className="text-gray-600 hover:text-sky-600 transition-colors">
                  Daily Readings
                </Link>
              </li>
              <li>
                <Link href="/outstations" className="text-gray-600 hover:text-sky-600 transition-colors">
                  Outstations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-serif text-base font-semibold text-sky-900">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources" className="text-gray-600 hover:text-sky-600 transition-colors">
                  Downloads & Gallery
                </Link>
              </li>
              <li>
                <Link href="/resources#tenders" className="text-gray-600 hover:text-sky-600 transition-colors">
                  Tender Information
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="text-gray-600 hover:text-sky-600 transition-colors">
                  Liturgical Calendar
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-600 hover:text-sky-600 transition-colors">
                  Online Giving
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-serif text-base font-semibold text-sky-900">Connect With Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-sky-600 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-sky-600 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-sky-600 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-sky-200 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} St. John's Parish Kajiado. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
