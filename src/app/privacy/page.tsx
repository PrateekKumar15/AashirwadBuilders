import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - Aashirwad Builders',
  description: 'Privacy Policy for Aashirwad Builders.',
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 min-h-screen">
      <Link href="/" className="text-primary hover:underline mb-8 inline-block">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none text-muted-foreground space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-2xl font-semibold text-primary">1. Information We Collect</h2>
        <p>We collect information you provide directly to us when you fill out a form, request information, or communicate with us.</p>
        <h2 className="text-2xl font-semibold text-primary">2. How We Use Your Information</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Aashirwad Builders and our users.</p>
        <h2 className="text-2xl font-semibold text-primary">3. Information Sharing</h2>
        <p>We do not share your personal information with companies, organizations, or individuals outside of Aashirwad Builders except in the following cases: with your consent, for legal reasons, or to protect rights and property.</p>
        <h2 className="text-2xl font-semibold text-primary">4. Data Security</h2>
        <p>We work hard to protect Aashirwad Builders and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold.</p>
      </div>
    </div>
  );
}
