import Link from "next/link";
import { dryEyeClinics } from "../constants/Constants";

const linkClass = "text-combination-200 hover:text-combination-100";
const bookButtonClass =
  "bg-combination-100 hover:bg-combination-200 hover:text-combination-100 text-white text-center font-bold py-3 px-4 rounded-md transition-colors duration-200 shadow-md";

// `callNow` swaps the booking link for a tap-to-call button
// ("Call Yorkville Now — 416-901-2725"), used on the eye emergencies page.
const ClinicBookingCards = ({
  bookLabel = "Book an Appointment",
  clinics = dryEyeClinics,
  callNow = false,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
    {clinics.map((clinic) => (
      <div
        key={clinic.name}
        className="bg-gray-50 rounded-lg p-6 flex flex-col gap-3"
      >
        <h3 className="text-combination-200 text-lg sm:text-xl font-bold">
          <Link href={clinic.pageHref} className="hover:text-combination-100">
            {clinic.name}
          </Link>
        </h3>
        <address className="not-italic text-neutral-500 text-sm sm:text-base leading-relaxed">
          {clinic.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          <a href={`tel:+1-${clinic.phone}`} className={`${linkClass} block`}>
            📞 {clinic.phone}
          </a>
          <a href={`mailto:${clinic.email}`} className={`${linkClass} block`}>
            ✉ {clinic.email}
          </a>
        </address>
        <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
          {clinic.description}
        </p>
        <div className="mt-auto pt-2">
          {callNow ? (
            <a
              href={`tel:+1-${clinic.phone}`}
              className={`${bookButtonClass} block w-full`}
            >
              Call {clinic.shortName} Now — {clinic.phone}
            </a>
          ) : (
            <Link
              href={clinic.bookHref}
              className={`${bookButtonClass} block w-full`}
            >
              {bookLabel} — {clinic.shortName}
            </Link>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default ClinicBookingCards;
