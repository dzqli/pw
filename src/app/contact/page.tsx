'use client'
import ContactCard from '@/components/ContactCard/ContactCard';

const Contact = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-[85vh] p-5 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p className="text-sm text-[var(--secondary)] ml-2 animate-pulse">Tap to flip &darr;</p>
      <ContactCard />
    </div>
  );
}

export default Contact;
