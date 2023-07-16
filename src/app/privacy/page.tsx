const PrivacyPolicy = () => {
  const privacyPolicy = [
    {
      title: "Introduction",
      content:
        "Welcome to our Privacy Policy page. This Privacy Policy governs the privacy of your personal information that we collect when you use our bot and related services (collectively, the 'Service'). By using the Service, you consent to the collection and use of your personal information as described in this Privacy Policy.",
    },
    {
      title: "Information We Collect",
      content:
        "Our bot collects and stores the following information from Discord solely for its functioning: role IDs, user IDs, message IDs, channel IDs, and guild IDs. This information is used to provide the features and functionality of the bot, such as managing giveaways and tracking donations.",
    },
    {
      title: "Data Security",
      content:
        "We take reasonable measures to protect the security of the collected information. However, please be aware that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
    },
    {
      title: "Sharing of Information",
      content:
        "We do not sell, trade, or otherwise transfer your personal information to third parties. The collected information is only used for the purpose of providing the bot's functionality and is not shared with any external entities.",
    },
    {
      title: "Children's Privacy",
      content:
        "Our Service is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from individuals under 13. If we become aware that we have collected personal information from an individual under 13, we will take steps to delete the information as soon as possible.",
    },
    {
      title: "Changes to this Privacy Policy",
      content:
        "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. It is your responsibility to review this Privacy Policy periodically for any changes.",
    },
    {
      title: "Contact Us",
      content: (
        <p>
          If you have any questions or concerns about this Privacy Policy,
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
            <h2 className="text-3xl font-semibold mb-6">Privacy Policy</h2>
            <ol className="list-decimal pl-6">
              {privacyPolicy.map((policy) => (
                <li key={policy.title}>
                  <h3 className="text-lg font-semibold mb-2">{policy.title}</h3>
                  <p className="text-sm leading-6 mb-2">{policy.content}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
