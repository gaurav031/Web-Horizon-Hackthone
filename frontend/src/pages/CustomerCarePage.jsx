import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CustomerCarePage = () => {
  return (
    <div className="p-6 mt-5">
      <Navbar />
      <header className="mb-6 mt-7">
        <h1 className="text-2xl font-bold">Hi Gaurav, need help with your recent booking?</h1>
        <a href="#" className="text-orange-500 float-right">View all your bookings &gt;</a>
      </header>

      <section className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <BookingCard
            title="Hotel Blue Wellington"
            date="Fri, 10 Sep - Sat, 25 Sep"
            status="Booking Confirmed"
            statusColor="text-green-500"
            image="https://pix8.agoda.net/hotelImages/50151814/784196908/1e8d702c6ffd9ecc84488d2003fc0be5.jpg?ce=0&s=1024x768"
            alt="Hotel Blue Wellington image"
          />
          <BookingCard
            title="PNBE - ADI"
            date="Fri, 10 Sep - 09:44 PM to Sat, 25 Sep"
            status="Partially Cancelled"
            statusColor="text-red-500"
            image="https://i.im.ge/2024/09/28/kdGCTS.photo-2024-09-28-11-32-02.jpeg"
            alt="Train image"
          />
          <BookingCard
            title="PNBE - ADI"
            date="Fri, 10 Sep - 09:44 PM to Sat, 25 Sep"
            status="Booking Successful"
            statusColor="text-green-500"
            image="https://i.im.ge/2024/09/28/kdGCTS.photo-2024-09-28-11-32-02.jpeg"
            alt="Train image"
          />
          <BookingCard
            title="BRC - PNBE"
            date="Mon, 29 Apr - 17:30 to Tue, 30 Apr"
            status="Booking Confirmed"
            statusColor="text-green-500"
            image="https://c8.alamy.com/comp/2J62Y15/vintage-steam-rail-engine-with-temple-and-blue-sky-background-at-day-image-is-taken-patna-college-patna-bihar-india-on-apr-15-2022-2J62Y15.jpg"
            alt="Train image"
          />
        </div>
      </section>

      <section className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <QuickGuide />
          <UnresolvedQuery />
        </div>
      </section>

      <section className="mb-6">
        <AboutIxigo />
      </section>

      <footer className="text-xs text-gray-500">
        <p>Please note:</p>
        <p>
          Hotel Booking will never ask for any personal information like credit/debit card number, CVV, OTP, card expiry date, netbank, passwords, etc. through phone, email, SMS, or any other type of communication. Any such request is a scam. Please do not share your personal information with anyone.
        </p>
      </footer>
      <Footer />
    </div>
  );
};

const BookingCard = ({ title, date, status, statusColor, image, alt }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={image} alt={alt} className="w-full h-24 object-cover rounded-md mb-4" />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-500">{date}</p>
      <p className={`font-semibold ${statusColor}`}>{status}</p>
    </div>
  );
};

const QuickGuide = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Quick Guide</h2>
      <div className="grid grid-cols-2 gap-4">
        <GuideItem icon="fas fa-user-cog" text="Account Settings" />
        <GuideItem icon="fas fa-money-bill-wave" text="Hotel Booking money" />
        <GuideItem icon="fas fa-shield-alt" text="Hotel Booking assured" />
        <GuideItem icon="fas fa-credit-card" text="Hotel Booking AU Credit Card" />
        <GuideItem icon="fas fa-question-circle" text="Pre-booking Queries" />
        <GuideItem icon="fas fa-money-check-alt" text="Hotel Booking money max" />
        <GuideItem icon="fas fa-wallet" text="Manage Payment Methods" />
      </div>
    </div>
  );
};

const GuideItem = ({ icon, text }) => {
  return (
    <div className="flex items-center">
      <i className={`${icon} text-blue-500 text-xl mr-2`}></i>
      <p>{text}</p>
    </div>
  );
};

const UnresolvedQuery = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Unresolved Query</h2>
      <div className="flex items-center mb-4">
        <img src="https://placehold.co/50x50" alt="User avatar" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="font-semibold">Booking ID: 1234567890</p>
          <p className="text-gray-500">My Hotel related query is not listed here. What should I do?</p>
        </div>
      </div>
      <div className="flex items-center">
        <img src="https://placehold.co/50x50" alt="Support avatar" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="font-semibold">TARA</p>
          <p className="text-gray-500">I have found your ticket booked through ixigo...</p>
        </div>
        <button className="ml-auto bg-orange-500 text-white px-4 py-2 rounded-lg">Chat &gt;</button>
      </div>
      <a href="#" className="text-orange-500 mt-4 block">Past Chat Threads &gt;</a>
    </div>
  );
};

const AboutIxigo = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">About Hotel Booking</h2>
      <p className="text-gray-500 mb-4">
        Here's a compilation of all the travel queries you may have. We're pretty sure the answer to your question will be here. Just in case you don't see it, please use contact us option mentioned below and we will get back to you for your resolution.
      </p>
      <div className="border rounded-lg">
        <AccordionItem question="What is Hotel Booking?" />
        <AccordionItem question="What are your terms of use and privacy policy?" />
        <AccordionItem question="How can I know about Hotel Booking mobile apps?" />
        <AccordionItem question="Why is Hotel Booking different from other travel booking platforms?" />
        <AccordionItem question="What if I cannot find my question on this list?" />
        <AccordionItem question="How do I contact Hotel Booking customer care?" />
        <AccordionItem question="How can I track refunds on Hotel Booking?" />
        <AccordionItem question="How do I cancel my ticket on Hotel Booking?" />
        <AccordionItem question="How do I get a refund on a ticket booking through Hotel Booking?" />
        <AccordionItem question="What is your Customer Grievance Redressal policy?" />
      </div>
    </div>
  );
};

const AccordionItem = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <button onClick={toggleAccordion} className="w-full text-left p-4 focus:outline-none">
        <span className="font-semibold">{question}</span>
        <i className={`fas fa-chevron-down float-right transform transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-100">
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis quam id leo feugiat, in tincidunt lacus facilisis.</p>
        </div>
      )}

    </div>


  );
};

export default CustomerCarePage;
