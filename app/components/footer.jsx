import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="flex flex-wrap items-center justify-center lg:justify-between space-x-8 space-y-10 lg:space-y-0 p-8 md:p-16 lg:p-24">
        {/* Left Section */}
        <div className="flex flex-col items-center space-y-10">
          <div>
            <Link href="/" className="flex items-center rtl:space-x-reverse">
              <Image src="/Ellipse 87.png" width={20} height={20} alt="Ellipse" />
              <Image src="/Polygon 1.png" width={20} height={20} alt="Polygon" />
              <span className="self-center font-[Helvetica] text-3xl font-bold whitespace-nowrap text-black">
                Embrace
              </span>
            </Link>
          </div>
          <div className="flex justify-between space-x-8 md:space-x-10">
            <Link href="https://www.instagram.com/accounts/login/" target="_blank">
              <FontAwesomeIcon className="text-[#3461FF] w-6 h-6" icon={faInstagram} />
            </Link>
            <Link href="https://x.com/i/flow/login?lang=en" target="_blank">
              <FontAwesomeIcon className="text-[#3461FF] w-6 h-6" icon={faTwitter} />
            </Link>
            <Link href="https://www.facebook.com/login.php/" target="_blank">
              <FontAwesomeIcon className="text-[#3461FF] w-6 h-6" icon={faFacebook} />
            </Link>
          </div>
          <div>
            <Link href="/contactus">
            <button className="bg-[#3461FF] text-white px-12 py-3 rounded-full mt-5 hover:bg-blue-600 transition">
              Contact Us
            </button>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-[#000000]">
          <div className="space-y-8">
            <p><Link href="#">Work With Us</Link></p>
            <p><Link href="">Advertise With Us</Link></p>
            <p><Link href="">Support Us</Link></p>
            <p><Link href="">Business Advices</Link></p>
          </div>
          <div className="space-y-8">
            <p><Link href="">Private Coaching</Link></p>
            <p><Link href="#ourwork">Our Work</Link></p>
            <p><Link href="#Commitments">Our Commitment</Link></p>
            <p><Link href="#team">Our Team</Link></p>
          </div>
          <div className="space-y-8">
            <p><Link href="#Companies">About Us</Link></p>
            <p><Link href="#faq">FAQs</Link></p>
            <p><Link href="">Report a Bug</Link></p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black text-white flex flex-col md:flex-row justify-between py-10 px-8 md:px-14 text-sm items-center">
        <div>
          <p>© 2022 Embrace, Inc. - All Rights Reserved</p>
        </div>
        <div className="flex space-x-14 mt-4 md:mt-0">
          <p>Terms of use</p>
          <p>Privacy policy</p>
        </div>
      </div>
    </section>
  );
}
