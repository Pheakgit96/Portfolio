import PropTypes from "prop-types";
import { BiSun } from "react-icons/bi";
import { BiMoon } from "react-icons/bi";
import { BiCurrentLocation } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoTiktok } from "react-icons/bi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoTelegram } from "react-icons/bi";
import Image from "../image/cv.jpg";

function HeaderLeft({ DarkMode, toggleDarkMode }) {
  return (
    <div className="min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-900">
      <div className="flex flex-col items-center justify-center gap-5">
        <img src={Image} alt="" className="w-32 rounded-full" />

        <div className="text-center space-y-1">
          <h1 className="text-4xl font-light">
            Sopheak <span className="font-semibold">Phorn</span>
          </h1>
          <h3 className="text-xl font-light">Web Developer</h3>
        </div>
        <button className="absolute right-10 top-10" onClick={toggleDarkMode}>
          {DarkMode ? (
            <BiSun className="text-2xl" />
          ) : (
            <BiMoon className="text-2xl" />
          )}
        </button>
      </div>
      <div className="flex flex-col items-start justify-start  p-5 gap-5 border-b dark:border-gray-900">
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <BiCurrentLocation className="text-2xl" />
            <span>Manchey, 271 St, Phnom Penh.</span>
          </li>
          <li className="flex items-center gap-2">
            <BiEnvelope className="text-2xl" />
            <span>phornsopheak7@gmail.com</span>
          </li>
          <li className="flex items-center gap-2">
            <BiPhone className="text-2xl" />
            <span>+855 093 578 066</span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-start justify-start  p-5 gap-5 border-b dark:border-gray-900">
        <h1 className="text-base font-semibold md:text-2xl">SOCIAL</h1>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <BiLogoGithub className="text-2xl" />
            <span>@Pheakgit96</span>
          </li>
          <li className="flex items-center gap-2">
            <BiLogoLinkedinSquare className="text-2xl" />
            <span>Phorn Sopheak</span>
          </li>
          <li className="flex items-center gap-2">
            <BiLogoTwitter className="text-2xl" />
            <span>@sopheak2799</span>
          </li>
          <li className="flex items-center gap-2">
            <BiLogoInstagramAlt className="text-2xl" />
            <span>@so_pheak_99</span>
          </li>
          <li className="flex items-center gap-2">
            <BiLogoTiktok className="text-2xl" />
            <span>@pheakk173</span>
          </li>
          <li className="flex items-center gap-2">
            <BiLogoFacebookCircle className="text-2xl" />
            <span>Phorn Sopheak</span>
          </li>
          <li className="flex items-center gap-2">
            <BiLogoTelegram className="text-2xl" />
            <span>@Phorn_pheak</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start justify-start  p-5 gap-5 border-b dark:border-gray-900">
        <h1 className="text-base font-semibold md:text-2xl">EDUCATION</h1>
        <ul>
          <li className="relative flex flex-col gap-1 border-1 p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
            <span className="font-semibold md:text-lg">
              Information Technology
            </span>
            <span className="font-light"> Asia Euro University</span>
            <span className="text-sm text-gray-400">2021-2025</span>
          </li>
          <li className="relative flex flex-col gap-1 border-1 p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
            <span className="font-semibold md:text-lg">Business School</span>
            <span className="font-light"> Asia Euro University</span>
            <span className="text-sm text-gray-400">2021-2025</span>
          </li>
          <li className="relative flex flex-col gap-1 border-1 p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
            <span className="font-semibold md:text-lg">
              Programming Language
            </span>
            <span className="font-light"> Asia Euro University</span>
            <span className="text-sm text-gray-400">2021-2025</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start justify-start  p-5 gap-5 border-b dark:border-gray-900">
        <h1 className="text-base font-semibold md:text-2xl">SKILLS</h1>
        <div className="flex flex-wrap gap-3">
          <div className="flex flex-wrap gap-3 ">
            <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">
              HTML
            </span>
            <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">
              CSS
            </span>
            <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">
              JAVASCRIPT
            </span>
            <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">
              PHP
            </span>
            <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">
              MYSQL
            </span>
            <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">
              JAVA
            </span>
            <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">
              REACT
            </span>
            <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">
              NEXT
            </span>
            <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">
              DOCKER
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start  p-5 gap-5 border-b dark:border-gray-900">
        <h1 className="text-base font-semibold md:text-2xl">HOBBIES</h1>
        <div className="flex flex-wrap gap-16 p-3">
          <ul className="flex list-disc flex-col gap-3">
            <li>Reading Book</li>
            <li>Play Football</li>
            <li>Workout</li>
          </ul>
          <ul className="flex list-disc flex-col gap-3">
            <li>Running</li>
            <li>Gaming</li>
            <li>Cooking</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start  p-5 gap-5 border-b dark:border-gray-900">
        <h1 className="text-base font-semibold md:text-2xl">LANGUAGES</h1>
        <ul className="flex list-disc flex-wrap gap-12 md:text-lg">
          <li>Khmer</li>
          <li>English</li>
          <li>Thai</li>
        </ul>
      </div>
    </div>
  );
}

HeaderLeft.propTypes = {
  DarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default HeaderLeft;
