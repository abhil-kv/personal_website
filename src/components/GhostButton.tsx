import type { ReactNode } from 'react';

interface GhostButtonProps {
  label: string;
  href?: string;
  icon?: ReactNode;
}

export default function GhostButton({ label, href = '#', icon }: GhostButtonProps) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10"
    >
      {icon}
      {label}
    </a>
  );
}
