import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - Aashirwad Builders',
  description: 'Terms of Service for Aashirwad Builders.',
};

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 min-h-screen">
      <Link href="/" className="text-primary hover:underline mb-8 inline-block">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-slate max-w-none text-muted-foreground space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-2xl font-semibold text-primary">1. Agreement to Terms</h2>
        <p>By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.</p>
        <h2 className="text-2xl font-semibold text-primary">2. Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials (information or software) on Aashirwad Builders's website for personal, non-commercial transitory viewing only.</p>
        <h2 className="text-2xl font-semibold text-primary">3. Disclaimer</h2>
        <p>The materials on Aashirwad Builders's website are provided on an 'as is' basis. Aashirwad Builders makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        <h2 className="text-2xl font-semibold text-primary">4. Limitations</h2>
        <p>In no event shall Aashirwad Builders or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Aashirwad Builders's website.</p>
      </div>
    </div>
  );
}
