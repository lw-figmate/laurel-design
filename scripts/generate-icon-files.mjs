/**
 * Generates individual icon component files from the grouped category files.
 * Each icon gets its own .tsx file, enabling 1:1 Figma Code Connect mapping.
 *
 * Run: node scripts/generate-icon-files.mjs
 */
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const ICONS_DIR = join(import.meta.dirname, '..', 'src', 'atoms', 'Icon', 'icons');

// ── Lucide icons: [exportName, lucideImportName] ──────────────────────

const lucideIcons = [
  // Navigation
  ['ArrowUpIcon', 'ArrowUp'],
  ['ArrowDownIcon', 'ArrowDown'],
  ['ArrowLeftIcon', 'ArrowLeft'],
  ['ArrowRightIcon', 'ArrowRight'],
  ['ChevronUpIcon', 'ChevronUp'],
  ['ChevronDownIcon', 'ChevronDown'],
  ['ChevronLeftIcon', 'ChevronLeft'],
  ['ChevronRightIcon', 'ChevronRight'],
  ['MoreHorizontalIcon', 'Ellipsis'],
  ['MoreVerticalIcon', 'EllipsisVertical'],
  ['MaximizeIcon', 'Maximize'],
  ['MinimizeIcon', 'Minimize'],
  // Actions
  ['SearchIcon', 'Search'],
  ['FilterIcon', 'Filter'],
  ['SortIcon', 'ArrowUpDown'],
  ['EditIcon', 'Pencil'],
  ['TrashIcon', 'Trash2'],
  ['CopyIcon', 'Copy'],
  ['DownloadIcon', 'Download'],
  ['UploadIcon', 'Upload'],
  ['ShareIcon', 'Share2'],
  ['PlusIcon', 'Plus'],
  ['MinusIcon', 'Minus'],
  ['RefreshIcon', 'RefreshCw'],
  ['SaveIcon', 'Save'],
  ['UndoIcon', 'Undo2'],
  ['RedoIcon', 'Redo2'],
  ['ZoomInIcon', 'ZoomIn'],
  ['ZoomOutIcon', 'ZoomOut'],
  ['PrintIcon', 'Printer'],
  ['ClipboardIcon', 'Clipboard'],
  // Status
  ['CheckIcon', 'Check'],
  ['XIcon', 'X'],
  ['InfoIcon', 'Info'],
  ['WarningIcon', 'TriangleAlert'],
  ['AlertCircleIcon', 'CircleAlert'],
  ['CheckCircleIcon', 'CircleCheck'],
  ['XCircleIcon', 'CircleX'],
  ['HelpCircleIcon', 'CircleHelp'],
  ['ShieldCheckIcon', 'ShieldCheck'],
  ['BanIcon', 'Ban'],
  ['LoaderIcon', 'Loader2'],
  // Media
  ['PlayIcon', 'Play'],
  ['PauseIcon', 'Pause'],
  ['ImageIcon', 'Image'],
  ['CameraIcon', 'Camera'],
  ['MicrophoneIcon', 'Mic'],
  ['VideoIcon', 'Video'],
  ['VolumeUpIcon', 'Volume2'],
  ['VolumeMuteIcon', 'VolumeX'],
  ['SkipForwardIcon', 'SkipForward'],
  ['SkipBackIcon', 'SkipBack'],
  ['MusicIcon', 'Music'],
  // Social
  ['HeartIcon', 'Heart'],
  ['StarIcon', 'Star'],
  ['BookmarkIcon', 'Bookmark'],
  ['BellIcon', 'Bell'],
  ['ThumbsUpIcon', 'ThumbsUp'],
  ['ThumbsDownIcon', 'ThumbsDown'],
  ['ShareAltIcon', 'Share'],
  // UI
  ['HomeIcon', 'House'],
  ['UserIcon', 'User'],
  ['UsersIcon', 'Users'],
  ['SettingsIcon', 'Settings'],
  ['MenuIcon', 'Menu'],
  ['CloseIcon', 'X'],
  ['EyeIcon', 'Eye'],
  ['EyeOffIcon', 'EyeOff'],
  ['LockIcon', 'Lock'],
  ['UnlockIcon', 'Unlock'],
  ['CalendarIcon', 'Calendar'],
  ['MailIcon', 'Mail'],
  ['ClockIcon', 'Clock'],
  ['GlobeIcon', 'Globe'],
  ['LinkIcon', 'Link'],
  ['ExternalLinkIcon', 'ExternalLink'],
  ['CodeIcon', 'Code'],
  ['TerminalIcon', 'Terminal'],
  ['DatabaseIcon', 'Database'],
  ['WifiIcon', 'Wifi'],
  ['WifiOffIcon', 'WifiOff'],
  ['MapPinIcon', 'MapPin'],
  ['LayersIcon', 'Layers'],
  ['GridIcon', 'LayoutGrid'],
  ['ListIcon', 'List'],
  ['SlidersIcon', 'SlidersHorizontal'],
  ['HashIcon', 'Hash'],
  ['ZapIcon', 'Zap'],
  ['AtSignIcon', 'AtSign'],
  ['PanelLeftIcon', 'PanelLeft'],
  // File
  ['FileIcon', 'File'],
  ['FolderIcon', 'Folder'],
  ['DocumentIcon', 'FileText'],
  ['CloudIcon', 'Cloud'],
  ['FolderOpenIcon', 'FolderOpen'],
  ['ArchiveIcon', 'Archive'],
  ['HardDriveIcon', 'HardDrive'],
  ['CloudUploadIcon', 'CloudUpload'],
  ['CloudDownloadIcon', 'CloudDownload'],
  // Communication
  ['MessageIcon', 'MessageSquare'],
  ['PhoneIcon', 'Phone'],
  ['InboxIcon', 'Inbox'],
  ['SendIcon', 'Send'],
  ['ReplyIcon', 'Reply'],
  ['ForwardIcon', 'Forward'],
  // Commerce
  ['ShoppingCartIcon', 'ShoppingCart'],
  ['ShoppingBagIcon', 'ShoppingBag'],
  ['CreditCardIcon', 'CreditCard'],
  ['DollarSignIcon', 'DollarSign'],
  ['TagIcon', 'Tag'],
  ['ReceiptIcon', 'Receipt'],
  ['StoreIcon', 'Store'],
  ['GiftIcon', 'Gift'],
  // Editing
  ['BoldIcon', 'Bold'],
  ['ItalicIcon', 'Italic'],
  ['UnderlineIcon', 'Underline'],
  ['StrikethroughIcon', 'Strikethrough'],
  ['AlignLeftIcon', 'AlignLeft'],
  ['AlignCenterIcon', 'AlignCenter'],
  ['AlignRightIcon', 'AlignRight'],
  ['ListOrderedIcon', 'ListOrdered'],
];

// ── Simple-icons brands: [exportName, siImportName] ───────────────────

const simpleIcons = [
  ['GitHubIcon', 'siGithub'],
  ['XTwitterIcon', 'siX'],
  ['FacebookIcon', 'siFacebook'],
  ['InstagramIcon', 'siInstagram'],
  ['YouTubeIcon', 'siYoutube'],
  ['TikTokIcon', 'siTiktok'],
  ['RedditIcon', 'siReddit'],
  ['DiscordIcon', 'siDiscord'],
  ['TwitchIcon', 'siTwitch'],
  ['PinterestIcon', 'siPinterest'],
  ['SpotifyIcon', 'siSpotify'],
  ['AppleIcon', 'siApple'],
  ['GoogleIcon', 'siGoogle'],
  ['WhatsAppIcon', 'siWhatsapp'],
  ['TelegramIcon', 'siTelegram'],
  ['ThreadsIcon', 'siThreads'],
  ['BlueskyIcon', 'siBluesky'],
  ['DribbbleIcon', 'siDribbble'],
  ['FigmaIcon', 'siFigma'],
  ['SnapchatIcon', 'siSnapchat'],
];

// ── Custom brand icons (hand-coded SVG paths) ────────────────────────

const customBrands = {
  LinkedInIcon: `import { forwardRef } from 'react';
import { Icon } from '../Icon';
import type { NamedIconProps } from './types';

export const LinkedInIcon = forwardRef<SVGSVGElement, NamedIconProps>((props, ref) => (
  <Icon ref={ref} viewBox="0 0 24 24" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </Icon>
));
LinkedInIcon.displayName = 'LinkedInIcon';
`,
  SlackIcon: `import { forwardRef } from 'react';
import { Icon } from '../Icon';
import type { NamedIconProps } from './types';

export const SlackIcon = forwardRef<SVGSVGElement, NamedIconProps>((props, ref) => (
  <Icon ref={ref} viewBox="0 0 24 24" {...props}>
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
  </Icon>
));
SlackIcon.displayName = 'SlackIcon';
`,
  MicrosoftIcon: `import { forwardRef } from 'react';
import { Icon } from '../Icon';
import type { NamedIconProps } from './types';

export const MicrosoftIcon = forwardRef<SVGSVGElement, NamedIconProps>((props, ref) => (
  <Icon ref={ref} viewBox="0 0 24 24" {...props}>
    <path d="M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623" />
  </Icon>
));
MicrosoftIcon.displayName = 'MicrosoftIcon';
`,
};

// ── Generate files ────────────────────────────────────────────────────

let count = 0;

// Lucide icons
for (const [name, lucideName] of lucideIcons) {
  const content = `import { ${lucideName} } from 'lucide';
import { createLucideIcon } from './createLucideIcon';

export const ${name} = createLucideIcon(${lucideName}, '${name}');
`;
  writeFileSync(join(ICONS_DIR, `${name}.tsx`), content);
  count++;
}

// Simple-icons brands
for (const [name, siName] of simpleIcons) {
  const content = `import { ${siName} } from 'simple-icons';
import { createBrandIcon } from './createBrandIcon';

export const ${name} = createBrandIcon(${siName}, '${name}');
`;
  writeFileSync(join(ICONS_DIR, `${name}.tsx`), content);
  count++;
}

// Custom brands
for (const [name, content] of Object.entries(customBrands)) {
  writeFileSync(join(ICONS_DIR, `${name}.tsx`), content);
  count++;
}

// ── Generate barrel index.ts ──────────────────────────────────────────

const allNames = [
  ...lucideIcons.map(([n]) => n),
  ...simpleIcons.map(([n]) => n),
  ...Object.keys(customBrands),
];

const indexLines = [
  "export type { NamedIconProps } from './types';",
  "export { createLucideIcon } from './createLucideIcon';",
  "export { createBrandIcon } from './createBrandIcon';",
  '',
  ...allNames.map((n) => `export { ${n} } from './${n}';`),
  '',
];

writeFileSync(join(ICONS_DIR, 'index.ts'), indexLines.join('\n'));

console.log(`✓ Generated ${count} individual icon files + index.ts`);
