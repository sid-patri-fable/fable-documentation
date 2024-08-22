import Header from "./.components/header/Header.jsx";
import CustomLayout from "./.components/custom-layout/CustomLayout.jsx";
import CustomSidepanel from "./.components/sidepanel/index.jsx";
import Footer from "./.components/footer/Footer.jsx";
 
module.exports = {
  version: "1.0.0",
  urlMapping: {
    globalPrefix: "/",
    entries: {},
    baseUrl: "https://help.sharefable.com/",
  },
  orderOfPages: [
    "Introduction",
    "Capturing-Demos",
    "Editing-Demos",
    "Sharing-Demos",
    "Tracking-and-Analyzing-Demos",
    "Managing-Fable-Account",
    "Integrations",
    "Miscellaneous",
    "Introduction/Welcome-to-Fable.mdx",
    "Introduction/Quick-Start-Guide.mdx",
    "Introduction/Fable-Chrome-Extension.mdx",
    "Capturing-Demos/Overview.mdx",
    "Capturing-Demos/Using-the-Extension.mdx",
    "Capturing-Demos/Adding-Additional-Captures.mdx",
    "Editing-Demos/Overview.mdx",
    "Editing-Demos/Types-of-Guides.mdx",
    "Editing-Demos/Editing-a-Text-Guide-Message.mdx",
    "Editing-Demos/Video-Guide-Message.mdx",
    "Editing-Demos/Multi-Guide.mdx",
    "Editing-Demos/Branding.mdx",
    "Editing-Demos/Call-to-Actions.mdx",
    "Editing-Demos/Effects.mdx",
    "Editing-Demos/Sizing-and-Positioning.mdx",
    "Editing-Demos/Hotspot.mdx",
    "Editing-Demos/Advanced-Element-Picker.mdx",
    "Editing-Demos/On-Screen-Edits.mdx",
    "Editing-Demos/Reordering-the-Demo.mdx",
    "Editing-Demos/Adding-an-Image-to-a-Demo.mdx",
    "Editing-Demos/Designing-Loader.mdx",
    "Editing-Demos/Lead-Form.mdx",
    "Editing-Demos/Module.mdx",
    "Editing-Demos/Mobile-Responsiveness.mdx",
    "Editing-Demos/Setting-an-Entry-Point.mdx",
    "Editing-Demos/Preview-a-Demo.mdx",
    "Editing-Demos/Publish-a-Demo.mdx",
    "Sharing-Demos/Overview.mdx",
    "Sharing-Demos/iFrame-Embed.mdx",
    "Sharing-Demos/Sharing-URL.mdx",
    "Tracking-and-Analyzing-Demos/Overview.mdx",
    "Tracking-and-Analyzing-Demos/Demo-Level-Insights.mdx",
    "Managing-Fable-Account/Overview.mdx",
    "Managing-Fable-Account/Demo-Library.mdx",
    "Managing-Fable-Account/User-Management.mdx",
    "Managing-Fable-Account/Billing.mdx",
    "Integrations/Overview.mdx",
    "Integrations/Zapier.mdx",
    "Integrations/Slack.mdx",
    "Miscellaneous/FAQs.mdx",
    "Miscellaneous/Glossary.mdx",
    "Settings-and-Preferences/Overview.mdx",
    "Settings-and-Preferences/Add-global-styling-to-all-your-demos.mdx",
    "Settings-and-Preferences/How-to-host-the-demos-on-my-domain.mdx",
    "Settings-and-Preferences/Troubleshoot-domain-mapping-issues.mdx",
    "Manage-billing/Manage-subscriptions.mdx",
    "Integrate-Demos-with-your-stack/Overview.mdx",
    "Integrate-Demos-with-your-stack/How-to-integrate-with-hubspot.mdx",
    "Integrate-Demos-with-your-stack/How-to-integrate-webhooks.mdx",
    "Manage-your-workspace/Overview.mdx",
    "Manage-your-workspace/Invite-new-user-to-organization.mdx",
    "Manage-your-workspace/Deactivate-user-from-organization.mdx",
    "Manage-your-workspace/Switch-organization.mdx",
    "Explore-demo-analytics/Overview.mdx",
    "Explore-demo-analytics/Check-demo-session-information.mdx",
    "Explore-demo-analytics/Conversion-and-completion-rate.mdx",
    "Explore-demo-analytics/Leads-captured-in-demo.mdx",
    "Explore-demo-analytics/Check-lead-journey.mdx",
    "Explore-demo-analytics/Make-sense-of-analytics-data.mdx",
  ],
  layout: CustomLayout,
  props: {
    header: {
      customComponent: Header,
      logo: {
        imageUrl: "https://www.sharefable.com/fable-logo.svg",
        title: "Fable Docs",
      },
      navLinks: {
        alignment: "right",
        links: [
          { title: "Product", url: "https://www.sharefable.com/products" },
          { title: "Demo Hub", url: "https://app.sharefable.com/hub/seeall/fable-ihxi2rpy9h0u4ivh" },
          {
            title: "Solutions",
            subtitle: "The ultimate demo platform for all your GTM needs",
            sublinks: [
              {
                title: "Marketing",
                subtitle: "Increase conversions from your existing funnel",
                logo: "https://www.sharefable.com/logo/marketing-logo.svg",
                url: "https://www.sharefable.com/solutions/marketing",
              },
              {
                title: "Sales",
                subtitle: "Create deal-winning demos every single time",
                logo: "https://www.sharefable.com/logo/sales-logo.svg",
                url: "https://www.sharefable.com/solutions/sales",
              },
              {
                title: "Partnerships",
                subtitle: "Enable partners and skyrocket channel sales",
                logo: "https://www.sharefable.com/logo/partnerships-logo.svg",
                url: "https://www.sharefable.com/solutions/partnerships",
              },
              {
                title: "Learning & Development",
                subtitle: "Supercharge training and onboarding",
                logo: "https://www.sharefable.com/logo/learning-and-development-logo.svg",
                url: "https://www.sharefable.com/solutions/learning-and-development",
              },
            ],
            banner: {
              title: "Customers are raving about us on G2!",
              heading: "Rated 4.9 on G2 & trusted by GTM teams across the world",
              description:
                "",
              cta: {
                title: "Check it out",
                url: "https://www.g2.com/products/pyxis-voyager-inc-fable/reviews",
              },
              image: {
                url: "https://www.sharefable.com/g2-badges/usersLoveUs.svg",
              }
            },
          },
          {
            title: "Resources",
            subtitle: "Made with love, from Fable's stable",
            sublinks: [
              {
                title: "Fable Blog",
                subtitle:
                  "Marketing & sales folks - you do not want to miss this!",
                logo: "https://www.sharefable.com/logo/blog-logo.svg",
                url: "https://www.sharefable.com/blog",
              },
              {
                title: "Help Center",
                subtitle: "Help you create compelling interactive demos",
                logo: "https://www.sharefable.com/logo/knowledge-base.svg",
                url: "https://help.sharefable.com/Introduction/Welcome-to-Fable",
              },
              {
                title: "E-Books",
                subtitle: "Handy resources that all GTM teams will love",
                logo: "https://www.sharefable.com/logo/e-books-logo.svg",
                url: "https://www.sharefable.com/ebooks",
              },
              {
                title: "Fable Champs",
                subtitle: "How hotshot SaaS companies achieved hypergrowth",
                logo: "https://www.sharefable.com/logo/fable-champs-logo.svg",
                url: "https://www.sharefable.com/growth-stories",
              },
              {
                title: "Fable Untold",
                subtitle:
                  "The small corner of the internet for inspiring growth stories",
                logo: "https://www.sharefable.com/logo/fables-untold-logo.svg",
                url: "https://www.sharefable.com/podcast/mastering-b2b-demand-generation",
              },
              {
                title: "Testimonials",
                subtitle: "Hear it from the horses' mouth why businesses love us",
                logo: "https://www.sharefable.com/logo/testimonials.svg",
                url: "https://www.sharefable.com/testimonials",
              },
            ],
            banner: {
              title: "Customers are raving about us on G2!",
              heading: "Rated 4.9 on G2 & trusted by GTM teams across the world",
              description:
                "",
              cta: {
                title: "Check it out",
                url: "https://www.g2.com/products/pyxis-voyager-inc-fable/reviews",
              },
              image: {
                url: "https://www.sharefable.com/g2-badges/usersLoveUs.svg",
              }
            },
          },
          { title: "Pricing", url: "https://www.sharefable.com/pricing" },
        ],
      },
      cta: {
        title: "Hello world",
        link: "#somewhere",
      },
      ctas: [
        {
          type: "secondary",
          title: "Start 14 days free trial",
          url: "https://app.sharefable.com/login",
        },
        {
          type: "primary",
          title: "Get a demo",
          url: "https://www.sharefable.com/get-a-demo",
        },
      ],
    },
    sidepanel: {
      customComponent: CustomSidepanel,
    },
    content: {},
    footer: {
      customComponent: Footer,
      logo: "https://www.sharefable.com/fable_footer-logo.svg",
      copyright: "Fable © 2024",
      links: [
        {
          heading: "Solutions",
          links: [
            {
              title: "Marketing",
              url: "https://www.sharefable.com/solutions/marketing",
            },
            { title: "Sales", url: "https://www.sharefable.com/solutions/sales" },
            {
              title: "Partnerships",
              url: "https://www.sharefable.com/solutions/partnerships",
            },
            {
              title: "Learning & Development",
              url: "https://www.sharefable.com/solutions/learning-and-development",
            },
          ],
        },
        {
          heading: "Resources",
          links: [
            {
              title: "Fable Champs",
              url: "https://www.sharefable.com/growth-stories",
            },
            {
              title: "Fable Untold",
              url: "https://www.sharefable.com/podcast/mastering-b2b-demand-generation",
            },
            { title: "Help Center", url: "https://help.sharefable.com/Introduction/Welcome-to-Fable" },
            { title: "E-Books", url: "https://www.sharefable.com/ebooks" },
            { title: "Fable Blog", url: "https://www.sharefable.com/blog" },
          ],
        },
        {
          heading: "Company",
          links: [
            {
              title: "Testimonials",
              url: "https://www.sharefable.com/customer-love",
            },
            {
              title: "LinkedIn",
              url: "https://www.linkedin.com/company/sharefable/",
            },
            { title: "Twitter", url: "https://twitter.com/sharefable" },
            {
              title: "Privacy Policy",
              url: "https://www.sharefable.com/privacy-policy",
            },
            {
              title: "Terms of Service",
              url: "https://www.sharefable.com/terms-of-service",
            },
            {
              title: "Affiliate Program",
              url: "https://www.sharefable.com/affiliate-program",
            },
            {
              title: "Contact Support",
              url: "https://www.sharefable.com/contact-support",
            },
          ],
        },
        {
          heading: "Competitors",
          links: [
            {
              title: "Fable vs Navattic",
              url: "https://www.sharefable.com/comparison/fable-vs-navattic",
            },
            {
              title: "Fable vs Demostack",
              url: "https://www.sharefable.com/comparison/fable-vs-demostack",
            },
            {
              title: "Fable vs Reprise",
              url: "https://www.sharefable.com/comparison/fable-vs-reprise",
            },
            {
              title: "Fable vs Walnut",
              url: "https://www.sharefable.com/comparison/fable-vs-walnut",
            },
            {
              title: "Fable vs Storylane",
              url: "https://www.sharefable.com/comparison/fable-vs-storylane",
            },
            {
              title: "Fable vs Testbox",
              url: "https://www.sharefable.com/comparison/fable-vs-testbox",
            },
          ],
        },
      ],
      g2Badges: [
        {
         source: 'https://www.sharefable.com/g2-badges/HighPerformer.svg',
         name: 'High Performer',
        },
        {
         source: 'https://www.sharefable.com/g2-badges/EasiestToUse.svg',
         name: 'Easiest To Use',
        },
        {
         source: 'https://www.sharefable.com/g2-badges/FastestImplementation.svg',
         name: 'Fastest Implementation',
        },
        {
         source: 'https://www.sharefable.com/g2-badges/BestEstimatedROI.svg',
         name: 'Best Estimated ROI',
        },
        {
         source: 'https://www.sharefable.com/g2-badges/EasiestToDoBusinessWith.svg',
         name: 'Easiest To Do Business With',
        },
      ],
    },
    toc: {
      show: false,
    },
  },
  theme: {
    colors: {
      primary: "#16023e",
      textPrimary: "#1e293b",
      textSecondary: "#fff",
      textTertiary: "#713aff",
      backgroundPrimary: "#fff",
      backgroundSecondary: "#16023e",
      accent: "#f2e6fc",
      border: "#d1d5db",
    },
    typography: {
      fontSize: 16,
      fontFamily: "IBM Plex Sans",
      lineHeight: 1.5,
      h1: {
        margin: "0 0 1.5rem 0",
        padding: 0,
        fontSize: "3.62rem",
        fontWeight: 700,
        lineHeight: "4.25rem",
      },
      h2: {
        margin: "0 0 2rem 0",
        padding: 0,
        fontSize: "2rem",
        fontWeight: 600,
        lineHeight: "2.25rem",
      },
      h3: {
        margin: "2rem 0 2rem 0",
        padding: 0,
        fontSize: "1.25rem",
        fontWeight: 600,
        lineHeight: "1.625rem",
      },
      h4: {
        margin: "0 0 1.5rem 0",
        padding: 0,
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: "1.375rem",
      },
      h5: {
        margin: "0 0 1.5rem 0",
        padding: 0,
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: "1.375rem",
      },
      h6: {
        margin: "0 0 1.5rem 0",
        padding: 0,
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: "1.375rem",
      },
      p: {
        margin: "1.5rem 0 1.5rem 0",
        padding: 0,
        fontSize: "1.125rem",
        fontWeight: 400,
        lineHeight: "1.625rem",
      },
    },
  },
};
