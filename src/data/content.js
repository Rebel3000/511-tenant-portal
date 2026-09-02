export const nav = [
  { label: 'Product', href: '#features' },
  { label: 'How it works', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export const clients = [
  'Northstar Freight',
  'Cascade Retail',
  'Ironclad Logistics',
  'Vertex Labs',
  'Lumen Analytics',
  'Acme Robotics',
  'Fieldstone Health',
  'Briarwood Capital',
]

export const features = [
  {
    icon: 'Workflow',
    title: 'Workflow automation',
    description:
      'Turn multi-step processes into automations that run themselves — approvals, handoffs, and follow-ups included.',
  },
  {
    icon: 'LineChart',
    title: 'Real-time analytics',
    description:
      'Live dashboards surface bottlenecks and trends the moment they happen, not at the end of the quarter.',
  },
  {
    icon: 'Plug',
    title: 'Seamless integrations',
    description:
      'Connect your CRM, data warehouse, and messaging tools in minutes — no engineering sprint required.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Enterprise-grade security',
    description:
      'SSO, role-based access, and full audit trails, backed by SOC 2 Type II controls from day one.',
  },
  {
    icon: 'Users',
    title: 'Built for teams',
    description:
      'Shared views, comments, and ownership keep everyone working from the same source of truth.',
  },
  {
    icon: 'Headset',
    title: 'Dedicated support',
    description: 'A named implementation specialist and 24/7 support, not just a ticket queue.',
  },
]

export const process = [
  {
    step: '01',
    title: 'Connect',
    description: 'Link your existing tools and data sources — Wade Vantage maps your workflows automatically.',
  },
  {
    step: '02',
    title: 'Automate',
    description: 'Turn repetitive steps into rules-based automations your team can trust.',
  },
  {
    step: '03',
    title: 'Optimize',
    description: 'Use live dashboards to spot bottlenecks and act on them before they cost you.',
  },
  {
    step: '04',
    title: 'Scale',
    description: 'Add teams and workflows without adding headcount to manage them.',
  },
]

export const stats = [
  { value: 42, suffix: '%', label: 'Faster cycle times' },
  { value: 99.99, suffix: '%', decimals: 2, label: 'Platform uptime' },
  { value: 500, suffix: '+', label: 'Teams onboarded' },
  { value: 24, suffix: '/7', label: 'Support coverage' },
]

export const testimonials = [
  {
    quote:
      "Wade Vantage replaced four spreadsheets and a Slack channel full of 'did anyone check this?' with one dashboard everyone trusts.",
    name: 'Priya Anand',
    role: 'VP Operations, Cascade Retail',
  },
  {
    quote:
      'We cut our approval cycle from five days to under one. The automations paid for the platform in the first month.',
    name: 'Marcus Ellery',
    role: 'COO, Ironclad Logistics',
  },
  {
    quote:
      "The implementation team actually understood our workflows instead of forcing us into theirs. That's rare.",
    name: 'Sofia Reyes',
    role: 'Head of Revenue Ops, Vertex Labs',
  },
]

export const pricing = [
  {
    name: 'Starter',
    price: '$49',
    period: '/user/mo',
    description: 'For small teams automating their first workflows.',
    features: ['Up to 10 users', '5 active workflows', 'Core integrations', 'Email support'],
    cta: 'Start free trial',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$99',
    period: '/user/mo',
    description: 'For teams scaling operations across departments.',
    features: [
      'Unlimited users',
      'Unlimited workflows',
      'All integrations',
      'Advanced analytics',
      'Priority support',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations with complex, mission-critical operations.',
    features: [
      'Everything in Growth',
      'SSO & advanced permissions',
      'Dedicated implementation specialist',
      '99.99% uptime SLA',
      '24/7 phone support',
    ],
    cta: 'Talk to sales',
    highlighted: false,
  },
]

export const faqs = [
  {
    question: 'How long does implementation take?',
    answer:
      'Most teams are live within two weeks. Your implementation specialist maps your existing workflows during onboarding, so you\'re not starting from a blank slate.',
  },
  {
    question: 'Do you integrate with our existing tools?',
    answer:
      'Wade Vantage connects to common CRMs, data warehouses, and messaging platforms out of the box, plus webhooks and an open API for anything custom.',
  },
  {
    question: 'What does the free trial include?',
    answer:
      'Full access to the Growth plan for 14 days, including automations, analytics, and integrations — no credit card required.',
  },
  {
    question: 'Is our data secure?',
    answer:
      'Yes. We\'re SOC 2 Type II compliant, encrypt data at rest and in transit, and support SSO and role-based access controls on every paid plan.',
  },
  {
    question: 'Can I change plans later?',
    answer: 'Anytime. Upgrades apply immediately; downgrades take effect at the start of your next billing cycle.',
  },
]

export const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Security', href: '#faq' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Resources: [
    { label: 'FAQ', href: '#faq' },
    { label: 'Support', href: '#' },
    { label: 'Status', href: '#' },
  ],
}
