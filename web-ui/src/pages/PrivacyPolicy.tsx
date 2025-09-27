interface PrivacyNoticeProps { onBack?: () => void }

export default function PrivacyNotice({ onBack }: PrivacyNoticeProps) {
  return (
  <div className="max-w-3xl mx-auto px-4 pt-28 pb-16 text-secondary-800">{/* pt-28 accounts for fixed header overlap */}
      <div className="mb-8 flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">
          Cardigan Lane Solutions Customer Privacy Notice
        </h1>
        {onBack && (
          <button
            onClick={onBack}
            className="inline-flex items-center whitespace-nowrap bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-sm font-medium px-4 py-2 rounded-md shadow hover:shadow-lg hover:from-primary-700 hover:to-secondary-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <span className="mr-2">←</span> Back
          </button>
        )}
      </div>
      
      <p className="mb-4">
        This privacy notice tells you what to expect us to do with your personal
        information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contents</h2>
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li>Contact details</li>
        <li>What information we collect, use, and why</li>
        <li>Lawful bases and data protection rights</li>
        <li>Where we get personal information from</li>
        <li>How long we keep information</li>
        <li>Who we share information with</li>
        <li>Sharing information outside the Isle of Man/UK</li>
        <li>How to complain</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2">Contact details</h3>
      <p>
        Email: <a href="mailto:hello@clsolutions.tech" className="text-blue-600">hello@clsolutions.tech</a>
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">What information we collect, use, and why</h3>
      <p className="mb-2">We collect or use the following personal information for the operation of client or customer accounts:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Names and contact details</li>
        <li>Purchase or service history</li>
        <li>Information used for security purposes</li>
      </ul>
      <p className="mb-2">We collect or use the following personal information for dealing with queries, complaints or claims:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Names and contact details</li>
        <li>Customer or client accounts and records</li>
        <li>Correspondence</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2">Lawful bases and data protection rights</h3>
      <p className="mb-2">
        Under the Isle of Man Data Protection Act (2018), we must have a “lawful basis” for collecting and using your personal information.
      </p>
      <p className="font-semibold mb-2">Your data protection rights include:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Right of access – request copies of your personal data</li>
        <li>Right to rectification – request correction of inaccurate or incomplete data</li>
        <li>Right to erasure – request deletion of your data</li>
        <li>Right to restriction – request limits on how we use your data</li>
        <li>Right to object – object to processing of your data</li>
        <li>Right to data portability – request we transfer your data</li>
        <li>Right to withdraw consent – when consent is our lawful basis</li>
      </ul>
      <p className="mb-4">
        If you make a request, we will respond without undue delay and within one month.
      </p>
      <p className="font-semibold mb-2">Our lawful bases for collecting or using personal information for the operation of client or customer accounts are:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Consent – with your permission, after providing full information</li>
        <li>Contract – to enter into or carry out a contract with you</li>
        <li>Legitimate interests – to manage and operate accounts, ensure billing, secure access, and communication</li>
      </ul>
      <p className="font-semibold mb-2">Our lawful basis for dealing with queries, complaints or claims:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Legitimate interests – to respond effectively, resolve issues, and maintain professional relationships</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2">Where we get personal information from</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Directly from you</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2">How long we keep information</h3>
      <p>
        We keep customer responses in line with <strong>Formspree’s retention policy</strong>, which deletes form submissions automatically once forwarded to our email. Beyond that, we only retain personal information as long as necessary to provide services, meet obligations, or comply with legal requirements.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Who we share information with</h3>
      <p className="font-semibold">Data processors</p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Formspree Inc.</strong> – Processes contact form responses and forwards them securely to <a href="mailto:hello@clsolutions.tech" className="text-blue-600">hello@clsolutions.tech</a></li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2">Sharing information outside the Isle of Man/UK</h3>
      <p className="mb-2">
        Where necessary, our data processors may share personal information outside of the Isle of Man and UK. When this occurs, they comply with UK GDPR and Isle of Man law, ensuring appropriate safeguards are in place.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Organisation name:</strong> Formspree Inc.</li>
        <li><strong>Category of recipient:</strong> Form handling / web services provider</li>
        <li><strong>Country:</strong> United States</li>
        <li><strong>Transfer mechanism:</strong> Addendum to the EU Standard Contractual Clauses (SCCs)</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2">How to complain</h3>
      <p className="mb-2">
        If you have concerns about how we use your personal data, please contact us using the details above.
      </p>
      <p className="mb-2">
        If you remain unhappy after raising a complaint with us, you can contact the <strong>Isle of Man Information Commissioner</strong>:
      </p>
      <address className="not-italic mb-4">
        Information Commissioner’s Office<br />
        1st Floor, Prospect House<br />
        27 Circular Road<br />
        Douglas, Isle of Man, IM1 1AU<br />
        Tel: +44 1624 693260<br />
        Email: <a href="mailto:ask@inforights.im" className="text-blue-600">ask@inforights.im</a><br />
        Website: <a href="https://www.inforights.im" target="_blank" className="text-blue-600">https://www.inforights.im</a>
      </address>

      <p className="text-sm text-gray-600">Last updated: 27/09/2025</p>
    </div>
  );
}