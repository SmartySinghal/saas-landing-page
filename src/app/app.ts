import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Plan {
  name: string;
  monthly: number;
  description: string;
  features: string[];
  highlighted?: boolean;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
})
export class App {
  // UI state (signals = automatic screen updates in zoneless Angular)
  menuOpen = signal(false);
  yearly = signal(false);
  openFaq = signal<number | null>(0);
  sent = signal(false);

  form = { name: '', email: '', message: '' };

  readonly navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  readonly logos = ['Northwind', 'Acme Co', 'Globex', 'Initech', 'Umbrella', 'Hooli'];

  readonly features = [
    { icon: '⚡', title: 'Lightning-fast boards', text: 'Plan sprints and track tasks with drag-and-drop boards that update instantly for the whole team.' },
    { icon: '🤝', title: 'Real-time collaboration', text: 'Comment, mention teammates and share files without leaving the task you are working on.' },
    { icon: '📊', title: 'Smart reports', text: 'See progress, workload and deadlines at a glance with dashboards that build themselves.' },
    { icon: '🔔', title: 'Automations', text: 'Move cards, assign owners and send reminders automatically with simple if-this-then-that rules.' },
    { icon: '🔒', title: 'Enterprise-grade security', text: 'SSO, role-based permissions and encrypted data keep your projects safe.' },
    { icon: '📱', title: 'Works everywhere', text: 'A responsive web app plus mobile-friendly views, so your team stays in sync on any device.' },
  ];

  readonly steps = [
    { n: '01', title: 'Create your workspace', text: 'Sign up in seconds and invite your team with a single link.' },
    { n: '02', title: 'Plan your work', text: 'Import tasks or start from a template built for your workflow.' },
    { n: '03', title: 'Ship faster', text: 'Track progress, automate busywork and hit every deadline.' },
  ];

  readonly plans: Plan[] = [
    { name: 'Starter', monthly: 0, description: 'For individuals getting organised.', features: ['Up to 3 projects', 'Unlimited tasks', 'Basic boards', 'Community support'] },
    { name: 'Pro', monthly: 12, description: 'For growing teams that need more power.', features: ['Unlimited projects', 'Automations', 'Advanced reports', 'Priority email support'], highlighted: true },
    { name: 'Business', monthly: 29, description: 'For organisations with advanced needs.', features: ['Everything in Pro', 'SSO and permissions', 'Audit logs', 'Dedicated success manager'] },
  ];

  readonly testimonials = [
    { quote: 'We cut our weekly status meetings in half. Everyone just checks the board.', name: 'Priya S.', role: 'Product Manager', initials: 'PS' },
    { quote: 'Setting up automations took five minutes and saves us hours every week.', name: 'Daniel R.', role: 'Engineering Lead', initials: 'DR' },
    { quote: 'Clean, fast and our clients love the shared project view.', name: 'Aisha K.', role: 'Agency Founder', initials: 'AK' },
  ];

  readonly faqs = [
    { q: 'Is there a free plan?', a: 'Yes. The Starter plan is free forever for up to 3 projects, with no credit card required.' },
    { q: 'Can I change plans later?', a: 'Absolutely. Upgrade, downgrade or cancel at any time from your account settings.' },
    { q: 'Do you offer discounts for yearly billing?', a: 'Yes, yearly billing saves you 20% compared with paying monthly.' },
    { q: 'Is my data secure?', a: 'All data is encrypted in transit and at rest, and Business plans include SSO and audit logs.' },
  ];

  price(plan: Plan) {
    return this.yearly() ? Math.round(plan.monthly * 0.8) : plan.monthly;
  }

  readonly billingLabel = computed(() => (this.yearly() ? '/mo, billed yearly' : '/month'));

  toggleFaq(i: number) {
    this.openFaq.update(cur => (cur === i ? null : i));
  }

  submit() {
    // Demo only: in a real project this would call an API.
    this.sent.set(true);
    this.form = { name: '', email: '', message: '' };
  }

  readonly year = new Date().getFullYear();
}
