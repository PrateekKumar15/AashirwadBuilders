import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy - Aashirwad Builders',
  description: 'Cookie Policy for Aashirwad Builders.',
};

export default function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 min-h-screen">
      <Link href="/" className="text-primary hover:underline mb-8 inline-block">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      <div className="prose prose-slate max-w-none text-muted-foreground space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-2xl font-semibold text-primary">1. What Are Cookies</h2>
        <p>As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience.</p>
        <h2 className="text-2xl font-semibold text-primary">2. How We Use Cookies</h2>
        <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.</p>
        <h2 className="text-2xl font-semibold text-primary">3. Disabling Cookies</h2>
        <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.</p>
        <h2 className="text-2xl font-semibold text-primary">4. The Cookies We Set</h2>
        <p>If you create an account with us or interact with forms on our site, we will use cookies for the management of the signup process, general administration, and remembering your user details for future correspondence.</p>
      </div>
    </div>
  );
}
