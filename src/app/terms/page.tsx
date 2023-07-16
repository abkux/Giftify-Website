const TermsOfService = () => {
  const termsOfService = [
    {
      title: "Introduction",
      content:
        "Thank you for using Giftify! These Terms of Service ('Terms') govern your use of our bot and any related services (collectively, the 'Service'). By using the Service, you agree to comply with these Terms. Please read them carefully before using the Service.",
    },
    {
      title: "Description of Service",
      content:
        "Giftify is a bot designed to streamline the process of hosting giveaways on platforms such as Discord. It provides features such as creating and managing giveaways, timers, and donation tracking.",
    },
    {
      title: "User Conduct",
      content:
        "You agree to use the Service in compliance with applicable laws and regulations. You are solely responsible for your conduct while using the Service. Prohibited activities include but are not limited to: violating any laws or regulations, impersonating any person or entity, interfering with or disrupting the Service or servers, engaging in any form of harassment or abusive behavior, and uploading or transmitting viruses or any other malicious code.",
    },
    {
      title: "Intellectual Property",
      content:
        "Giftify and its associated logos and designs are the property of Giftify Inc. You may not use our intellectual property without prior written consent.",
    },
    {
      title: "Disclaimer of Warranties",
      content:
        "The Service is provided 'as is' and without warranties of any kind, whether express or implied. We do not guarantee the accuracy, reliability, or availability of the Service. You use the Service at your own risk.",
    },
    {
      title: "Limitation of Liability",
      content:
        "Giftify Inc. shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages resulting from your use of the Service. You agree to indemnify and hold Giftify Inc. harmless from any claims arising out of your use of the Service.",
    },
    {
      title: "Modifications to Terms of Service",
      content:
        "Giftify Inc. reserves the right to modify or update these Terms of Service at any time without prior notice. Continued use of the Service after any modifications constitute your acceptance of the revised Terms.",
    },
    {
      title: "Contact Us",
      content: (
        <p>
          If you have any questions or concerns about these Terms of Service,
          please contact us at{" "}
          <a href="mailto:akai.is.amazing@gmail.com">
            akai.is.amazing@gmail.com
          </a>
          .
        </p>
      ),
    },
  ];

  return (
    <section className="bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-white">
            <h2 className="text-3xl font-semibold mb-6">Terms of Service</h2>
            <h4 className="mb-6">Effective date: July 15, 2023 </h4>
            <ol className="list-decimal pl-6">
              {termsOfService.map((term) => (
                <li key={term.title}>
                  <h3 className="text-lg font-semibold mb-2">{term.title}</h3>
                  <p className="text-sm leading-6 mb-2">{term.content}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
