/**
 * Official vector icons for Microsoft ecosystem products with authentic brand palettes.
 * Used for orbital badges, floating visuals, and service callouts.
 */

type IconProps = {
  className?: string;
  size?: number;
};

export function PowerAutomateIcon({ className, size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="pa-g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2BB8F9" />
          <stop offset="100%" stopColor="#0078D4" />
        </linearGradient>
        <linearGradient id="pa-g2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0078D4" />
          <stop offset="100%" stopColor="#004E8C" />
        </linearGradient>
        <linearGradient id="pa-g3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#50E6FF" />
          <stop offset="100%" stopColor="#0078D4" />
        </linearGradient>
      </defs>
      <path
        d="M27.5 13.5L16 2.5a2.5 2.5 0 0 0-3.5 0l-8 7.5a2.5 2.5 0 0 0 0 3.5l11.5 11 8-7.5a2.5 2.5 0 0 0 0-3.5Z"
        fill="url(#pa-g1)"
      />
      <path
        d="M4.5 13.5L16 24.5a2.5 2.5 0 0 0 3.5 0l8-7.5a2.5 2.5 0 0 0 0-3.5L16 2.5 4.5 13.5Z"
        fill="url(#pa-g2)"
        opacity="0.85"
      />
      <path
        d="M16 2.5L4.5 13.5a2.5 2.5 0 0 0 0 3.5l11.5 11 4.5-4.3-7.5-7.2 7.5-7.2L16 2.5Z"
        fill="url(#pa-g3)"
      />
      <path
        d="M12.5 16l6-5.8v11.6L12.5 16Z"
        fill="#FFFFFF"
        opacity="0.9"
      />
    </svg>
  );
}

export function PowerBIIcon({ className, size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="pbi-bar1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F9E067" />
          <stop offset="100%" stopColor="#EAA300" />
        </linearGradient>
        <linearGradient id="pbi-bar2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F2C811" />
          <stop offset="100%" stopColor="#D98A00" />
        </linearGradient>
        <linearGradient id="pbi-bar3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D98A00" />
          <stop offset="100%" stopColor="#B36500" />
        </linearGradient>
      </defs>
      <rect x="5" y="16" width="6" height="12" rx="2" fill="url(#pbi-bar1)" />
      <rect x="13" y="10" width="6" height="18" rx="2" fill="url(#pbi-bar2)" />
      <rect x="21" y="4" width="6" height="24" rx="2" fill="url(#pbi-bar3)" />
    </svg>
  );
}

export function PowerAppsIcon({ className, size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="pa-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#871A5B" />
          <stop offset="100%" stopColor="#5C103D" />
        </linearGradient>
        <linearGradient id="pa-poly1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E23E8D" />
          <stop offset="100%" stopColor="#A81564" />
        </linearGradient>
        <linearGradient id="pa-poly2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF77B8" />
          <stop offset="100%" stopColor="#750E43" />
        </linearGradient>
      </defs>
      <path
        d="M6 8l10-5 10 5v16l-10 5-10-5V8Z"
        fill="url(#pa-bg)"
        opacity="0.3"
      />
      <path
        d="M6 10.5L16 5.5l10 5-10 5.5-10-5.5Z"
        fill="url(#pa-poly2)"
      />
      <path
        d="M6 10.5v11l10 5.5v-11L6 10.5Z"
        fill="url(#pa-poly1)"
      />
      <path
        d="M16 16v11l10-5.5v-11L16 16Z"
        fill="url(#pa-bg)"
      />
    </svg>
  );
}

export function CopilotIcon({ className, size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="copilot-g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#096DD9" />
          <stop offset="50%" stopColor="#1890FF" />
          <stop offset="100%" stopColor="#00D2FF" />
        </linearGradient>
        <linearGradient id="copilot-g2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5222D" />
          <stop offset="40%" stopColor="#FA8C16" />
          <stop offset="100%" stopColor="#FFC069" />
        </linearGradient>
        <linearGradient id="copilot-g3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#722ED1" />
          <stop offset="100%" stopColor="#9254DE" />
        </linearGradient>
      </defs>
      <path
        d="M8 8a6 6 0 0 1 10.2-4.2L24 9.6A6 6 0 0 1 24 18l-5.8 5.8a6 6 0 0 1-8.4 0L8 22V8Z"
        fill="url(#copilot-g1)"
      />
      <path
        d="M24 24a6 6 0 0 1-10.2 4.2L8 22.4A6 6 0 0 1 8 14l5.8-5.8a6 6 0 0 1 8.4 0L24 10v14Z"
        fill="url(#copilot-g2)"
        opacity="0.85"
      />
      <circle cx="16" cy="16" r="4" fill="url(#copilot-g3)" opacity="0.9" />
    </svg>
  );
}

export function Dynamics365Icon({ className, size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="d365-g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#002050" />
          <stop offset="100%" stopColor="#0078D4" />
        </linearGradient>
        <linearGradient id="d365-g2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2899F5" />
          <stop offset="100%" stopColor="#004E8C" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="9" height="9" rx="2" fill="url(#d365-g2)" />
      <rect x="17" y="6" width="9" height="9" rx="2" fill="url(#d365-g1)" />
      <rect x="6" y="17" width="9" height="9" rx="2" fill="url(#d365-g1)" />
      <rect x="17" y="17" width="9" height="9" rx="2" fill="url(#d365-g2)" />
    </svg>
  );
}

export function AzureIcon({ className, size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="az-g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#008AD7" />
          <stop offset="100%" stopColor="#005BA1" />
        </linearGradient>
        <linearGradient id="az-g2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#19B2FF" />
          <stop offset="100%" stopColor="#007FFF" />
        </linearGradient>
      </defs>
      <path
        d="M18.8 4L7.5 24.5a1.2 1.2 0 0 0 1 1.8h7.4l2.9-5.4h4.3l-4.3-16.9Z"
        fill="url(#az-g1)"
      />
      <path
        d="M19 4h-5.8a1.2 1.2 0 0 0-1.1.7L4.3 22.8a1.2 1.2 0 0 0 1 1.7h11.2L19 4Z"
        fill="url(#az-g2)"
      />
    </svg>
  );
}

export function SharePointIcon({ className, size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="sp-g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#036C70" />
          <stop offset="100%" stopColor="#004E52" />
        </linearGradient>
        <linearGradient id="sp-g2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#008272" />
          <stop offset="100%" stopColor="#036C70" />
        </linearGradient>
        <linearGradient id="sp-g3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#107C41" />
          <stop offset="100%" stopColor="#004E52" />
        </linearGradient>
      </defs>
      <circle cx="21" cy="11" r="7" fill="url(#sp-g1)" />
      <circle cx="13" cy="19" r="8.5" fill="url(#sp-g2)" />
      <circle cx="22" cy="21" r="6" fill="url(#sp-g3)" opacity="0.9" />
    </svg>
  );
}

export function TeamsIcon({ className, size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="teams-g1" x1="0%" y1="0%" x2="1" y2="1">
          <stop offset="0%" stopColor="#5059C9" />
          <stop offset="100%" stopColor="#333EA2" />
        </linearGradient>
        <linearGradient id="teams-g2" x1="0%" y1="0%" x2="1" y2="1">
          <stop offset="0%" stopColor="#7B83EB" />
          <stop offset="100%" stopColor="#5059C9" />
        </linearGradient>
      </defs>
      <path
        d="M20 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1 6h4a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1h-6v-6Z"
        fill="url(#teams-g1)"
      />
      <rect x="5" y="11" width="13" height="13" rx="2.5" fill="url(#teams-g2)" />
      <circle cx="11.5" cy="7.5" r="3.5" fill="url(#teams-g2)" />
      <path
        d="M8.5 15h6v2h-2v5h-2v-5h-2v-2Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function PurviewIcon({ className, size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="purview-g" x1="0%" y1="0%" x2="1" y2="1">
          <stop offset="0%" stopColor="#00BCF2" />
          <stop offset="50%" stopColor="#0078D4" />
          <stop offset="100%" stopColor="#002050" />
        </linearGradient>
      </defs>
      <path
        d="M16 4l10 4.5v7.5c0 6.2-4.2 12-10 13.5-5.8-1.5-10-7.3-10-13.5V8.5L16 4Z"
        fill="url(#purview-g)"
      />
      <path
        d="M16 8v16.5c3.8-1.2 6.5-5 6.5-9V11.5L16 8Z"
        fill="#FFFFFF"
        opacity="0.25"
      />
      <circle cx="16" cy="15" r="3" fill="#FFFFFF" opacity="0.9" />
    </svg>
  );
}

export function DataverseIcon({ className, size = 28 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="dv-g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#008272" />
          <stop offset="100%" stopColor="#004E8C" />
        </linearGradient>
        <linearGradient id="dv-g2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2BB8F9" />
          <stop offset="100%" stopColor="#0078D4" />
        </linearGradient>
      </defs>
      <ellipse cx="16" cy="9" rx="10" ry="4" fill="url(#dv-g2)" />
      <path
        d="M6 9v7c0 2.2 4.5 4 10 4s10-1.8 10-4V9"
        fill="none"
        stroke="url(#dv-g1)"
        strokeWidth="2.5"
      />
      <path
        d="M6 16v7c0 2.2 4.5 4 10 4s10-1.8 10-4v-7"
        fill="none"
        stroke="url(#dv-g1)"
        strokeWidth="2.5"
      />
    </svg>
  );
}
