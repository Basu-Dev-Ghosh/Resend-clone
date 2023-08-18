const codeStrings = [
  'console.log("user welcome")',
  'console.log("reset password")',
  'console.log("user invite")',
  'console.log("weekly digest")',
];

const mailStrings = [
  {
    heading: "Welcome to ACME, user!",
    subContent:
      "We're excited to have you onboard at ACME. We hope you enjoy your journey with us. If you have any questions or need assistance, feel free to reach out.",
    buttonText: "Get Started",
    footer: "The ACME Team",
  },
  {
    heading: null,
    subContent:
      "Someone recently requested a password change for your ACME account. If this was you, you can set a new password here:",
    buttonText: "Reset password",
    footer: "Happy Day!",
  },
  {
    heading: "Join Project on ACME",
    subContent:
      "analasso (analasso@gmail.com) has invited you to the Project team on ACME.",
    buttonText: "Join the team",
    footer: null,
  },
  {
    heading: "Weekly Digest for you from ACME",
    subContent:
      "Understanding Photosynthesis: A Deep Dive: Photosynthesis is a crucial process for life on Earth. Understand how plants convert light energyRead More",
    buttonText: null,
    footer: null,
  },
];

export { codeStrings, mailStrings };
