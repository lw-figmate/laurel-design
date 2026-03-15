import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './Icon';
import { ICON_SIZES } from './Icon.types';
import {
  ArrowUpIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon,
  ChevronUpIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon,
  MoreHorizontalIcon, MoreVerticalIcon, MaximizeIcon, MinimizeIcon,
  SearchIcon, FilterIcon, SortIcon, EditIcon, TrashIcon, CopyIcon,
  DownloadIcon, UploadIcon, ShareIcon, PlusIcon, MinusIcon, RefreshIcon,
  SaveIcon, UndoIcon, RedoIcon, ZoomInIcon, ZoomOutIcon, PrintIcon, ClipboardIcon,
  CheckIcon, XIcon, InfoIcon, WarningIcon, AlertCircleIcon, CheckCircleIcon, XCircleIcon,
  HelpCircleIcon, ShieldCheckIcon, BanIcon, LoaderIcon,
  PlayIcon, PauseIcon, ImageIcon, CameraIcon, MicrophoneIcon,
  VideoIcon, VolumeUpIcon, VolumeMuteIcon, SkipForwardIcon, SkipBackIcon, MusicIcon,
  HeartIcon, StarIcon, BookmarkIcon, BellIcon, ThumbsUpIcon, ThumbsDownIcon, ShareAltIcon,
  HomeIcon, UserIcon, UsersIcon, SettingsIcon, MenuIcon, CloseIcon,
  EyeIcon, EyeOffIcon, LockIcon, UnlockIcon, CalendarIcon, MailIcon,
  ClockIcon, GlobeIcon, LinkIcon, ExternalLinkIcon,
  CodeIcon, TerminalIcon, DatabaseIcon, WifiIcon, WifiOffIcon,
  MapPinIcon, LayersIcon, GridIcon, ListIcon, SlidersIcon, HashIcon, ZapIcon, AtSignIcon, PanelLeftIcon,
  FileIcon, FolderIcon, DocumentIcon, CloudIcon,
  FolderOpenIcon, ArchiveIcon, HardDriveIcon, CloudUploadIcon, CloudDownloadIcon,
  MessageIcon, PhoneIcon, InboxIcon, SendIcon, ReplyIcon, ForwardIcon,
  ShoppingCartIcon, ShoppingBagIcon, CreditCardIcon, DollarSignIcon,
  TagIcon, ReceiptIcon, StoreIcon, GiftIcon,
  BoldIcon, ItalicIcon, UnderlineIcon, StrikethroughIcon,
  AlignLeftIcon, AlignCenterIcon, AlignRightIcon, ListOrderedIcon,
  GitHubIcon, XTwitterIcon, FacebookIcon, InstagramIcon, LinkedInIcon,
  YouTubeIcon, TikTokIcon, RedditIcon, DiscordIcon, SlackIcon,
  TwitchIcon, PinterestIcon, SpotifyIcon, AppleIcon, GoogleIcon,
  MicrosoftIcon, WhatsAppIcon, TelegramIcon, ThreadsIcon, BlueskyIcon,
  DribbbleIcon, FigmaIcon, SnapchatIcon,
} from './icons';

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ICON_SIZES },
    label: { control: 'text' },
  },
  args: {
    children: <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" />,
  },
  parameters: {
    docs: {
      description: {
        component: 'SVG icon wrapper with consistent sizing and accessibility. Renders custom SVG paths within a standardized viewBox.',
      },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomSVG: Story = {
  args: {
    label: 'Circle',
  },
};

export const WithLabel: Story = {
  args: { label: 'Search', children: <SearchIcon /> },
};

const IconCell = ({ name, children }: { name: string; children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, width: 80 }}>
    {children}
    <span style={{ fontSize: 10, color: '#666', textAlign: 'center' }}>{name}</span>
  </div>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 32 }}>
    <h3 style={{ marginBottom: 12, fontSize: 14, fontWeight: 600, color: '#333' }}>{title}</h3>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>{children}</div>
  </div>
);

export const Gallery: Story = {
  render: () => (
    <div style={{ fontFamily: 'sans-serif' }}>
      <Section title="Navigation">
        <IconCell name="ArrowUp"><ArrowUpIcon size="lg" /></IconCell>
        <IconCell name="ArrowDown"><ArrowDownIcon size="lg" /></IconCell>
        <IconCell name="ArrowLeft"><ArrowLeftIcon size="lg" /></IconCell>
        <IconCell name="ArrowRight"><ArrowRightIcon size="lg" /></IconCell>
        <IconCell name="ChevronUp"><ChevronUpIcon size="lg" /></IconCell>
        <IconCell name="ChevronDown"><ChevronDownIcon size="lg" /></IconCell>
        <IconCell name="ChevronLeft"><ChevronLeftIcon size="lg" /></IconCell>
        <IconCell name="ChevronRight"><ChevronRightIcon size="lg" /></IconCell>
        <IconCell name="MoreHorizontal"><MoreHorizontalIcon size="lg" /></IconCell>
        <IconCell name="MoreVertical"><MoreVerticalIcon size="lg" /></IconCell>
        <IconCell name="Maximize"><MaximizeIcon size="lg" /></IconCell>
        <IconCell name="Minimize"><MinimizeIcon size="lg" /></IconCell>
      </Section>

      <Section title="Actions">
        <IconCell name="Search"><SearchIcon size="lg" /></IconCell>
        <IconCell name="Filter"><FilterIcon size="lg" /></IconCell>
        <IconCell name="Sort"><SortIcon size="lg" /></IconCell>
        <IconCell name="Edit"><EditIcon size="lg" /></IconCell>
        <IconCell name="Trash"><TrashIcon size="lg" /></IconCell>
        <IconCell name="Copy"><CopyIcon size="lg" /></IconCell>
        <IconCell name="Download"><DownloadIcon size="lg" /></IconCell>
        <IconCell name="Upload"><UploadIcon size="lg" /></IconCell>
        <IconCell name="Share"><ShareIcon size="lg" /></IconCell>
        <IconCell name="Plus"><PlusIcon size="lg" /></IconCell>
        <IconCell name="Minus"><MinusIcon size="lg" /></IconCell>
        <IconCell name="Refresh"><RefreshIcon size="lg" /></IconCell>
        <IconCell name="Save"><SaveIcon size="lg" /></IconCell>
        <IconCell name="Undo"><UndoIcon size="lg" /></IconCell>
        <IconCell name="Redo"><RedoIcon size="lg" /></IconCell>
        <IconCell name="ZoomIn"><ZoomInIcon size="lg" /></IconCell>
        <IconCell name="ZoomOut"><ZoomOutIcon size="lg" /></IconCell>
        <IconCell name="Print"><PrintIcon size="lg" /></IconCell>
        <IconCell name="Clipboard"><ClipboardIcon size="lg" /></IconCell>
      </Section>

      <Section title="Status">
        <IconCell name="Check"><CheckIcon size="lg" /></IconCell>
        <IconCell name="X"><XIcon size="lg" /></IconCell>
        <IconCell name="Info"><InfoIcon size="lg" /></IconCell>
        <IconCell name="Warning"><WarningIcon size="lg" /></IconCell>
        <IconCell name="AlertCircle"><AlertCircleIcon size="lg" /></IconCell>
        <IconCell name="CheckCircle"><CheckCircleIcon size="lg" /></IconCell>
        <IconCell name="XCircle"><XCircleIcon size="lg" /></IconCell>
        <IconCell name="HelpCircle"><HelpCircleIcon size="lg" /></IconCell>
        <IconCell name="ShieldCheck"><ShieldCheckIcon size="lg" /></IconCell>
        <IconCell name="Ban"><BanIcon size="lg" /></IconCell>
        <IconCell name="Loader"><LoaderIcon size="lg" /></IconCell>
      </Section>

      <Section title="Media">
        <IconCell name="Play"><PlayIcon size="lg" /></IconCell>
        <IconCell name="Pause"><PauseIcon size="lg" /></IconCell>
        <IconCell name="Image"><ImageIcon size="lg" /></IconCell>
        <IconCell name="Camera"><CameraIcon size="lg" /></IconCell>
        <IconCell name="Microphone"><MicrophoneIcon size="lg" /></IconCell>
        <IconCell name="Video"><VideoIcon size="lg" /></IconCell>
        <IconCell name="VolumeUp"><VolumeUpIcon size="lg" /></IconCell>
        <IconCell name="VolumeMute"><VolumeMuteIcon size="lg" /></IconCell>
        <IconCell name="SkipForward"><SkipForwardIcon size="lg" /></IconCell>
        <IconCell name="SkipBack"><SkipBackIcon size="lg" /></IconCell>
        <IconCell name="Music"><MusicIcon size="lg" /></IconCell>
      </Section>

      <Section title="Social">
        <IconCell name="Heart"><HeartIcon size="lg" /></IconCell>
        <IconCell name="Star"><StarIcon size="lg" /></IconCell>
        <IconCell name="Bookmark"><BookmarkIcon size="lg" /></IconCell>
        <IconCell name="Bell"><BellIcon size="lg" /></IconCell>
        <IconCell name="ThumbsUp"><ThumbsUpIcon size="lg" /></IconCell>
        <IconCell name="ThumbsDown"><ThumbsDownIcon size="lg" /></IconCell>
        <IconCell name="ShareAlt"><ShareAltIcon size="lg" /></IconCell>
      </Section>

      <Section title="UI">
        <IconCell name="Home"><HomeIcon size="lg" /></IconCell>
        <IconCell name="User"><UserIcon size="lg" /></IconCell>
        <IconCell name="Users"><UsersIcon size="lg" /></IconCell>
        <IconCell name="Settings"><SettingsIcon size="lg" /></IconCell>
        <IconCell name="Menu"><MenuIcon size="lg" /></IconCell>
        <IconCell name="Close"><CloseIcon size="lg" /></IconCell>
        <IconCell name="Eye"><EyeIcon size="lg" /></IconCell>
        <IconCell name="EyeOff"><EyeOffIcon size="lg" /></IconCell>
        <IconCell name="Lock"><LockIcon size="lg" /></IconCell>
        <IconCell name="Unlock"><UnlockIcon size="lg" /></IconCell>
        <IconCell name="Calendar"><CalendarIcon size="lg" /></IconCell>
        <IconCell name="Mail"><MailIcon size="lg" /></IconCell>
        <IconCell name="Clock"><ClockIcon size="lg" /></IconCell>
        <IconCell name="Globe"><GlobeIcon size="lg" /></IconCell>
        <IconCell name="Link"><LinkIcon size="lg" /></IconCell>
        <IconCell name="ExternalLink"><ExternalLinkIcon size="lg" /></IconCell>
        <IconCell name="Code"><CodeIcon size="lg" /></IconCell>
        <IconCell name="Terminal"><TerminalIcon size="lg" /></IconCell>
        <IconCell name="Database"><DatabaseIcon size="lg" /></IconCell>
        <IconCell name="Wifi"><WifiIcon size="lg" /></IconCell>
        <IconCell name="WifiOff"><WifiOffIcon size="lg" /></IconCell>
        <IconCell name="MapPin"><MapPinIcon size="lg" /></IconCell>
        <IconCell name="Layers"><LayersIcon size="lg" /></IconCell>
        <IconCell name="Grid"><GridIcon size="lg" /></IconCell>
        <IconCell name="List"><ListIcon size="lg" /></IconCell>
        <IconCell name="Sliders"><SlidersIcon size="lg" /></IconCell>
        <IconCell name="Hash"><HashIcon size="lg" /></IconCell>
        <IconCell name="Zap"><ZapIcon size="lg" /></IconCell>
        <IconCell name="AtSign"><AtSignIcon size="lg" /></IconCell>
        <IconCell name="PanelLeft"><PanelLeftIcon size="lg" /></IconCell>
      </Section>

      <Section title="File">
        <IconCell name="File"><FileIcon size="lg" /></IconCell>
        <IconCell name="Folder"><FolderIcon size="lg" /></IconCell>
        <IconCell name="FolderOpen"><FolderOpenIcon size="lg" /></IconCell>
        <IconCell name="Document"><DocumentIcon size="lg" /></IconCell>
        <IconCell name="Cloud"><CloudIcon size="lg" /></IconCell>
        <IconCell name="CloudUpload"><CloudUploadIcon size="lg" /></IconCell>
        <IconCell name="CloudDownload"><CloudDownloadIcon size="lg" /></IconCell>
        <IconCell name="Archive"><ArchiveIcon size="lg" /></IconCell>
        <IconCell name="HardDrive"><HardDriveIcon size="lg" /></IconCell>
      </Section>

      <Section title="Communication">
        <IconCell name="Message"><MessageIcon size="lg" /></IconCell>
        <IconCell name="Phone"><PhoneIcon size="lg" /></IconCell>
        <IconCell name="Inbox"><InboxIcon size="lg" /></IconCell>
        <IconCell name="Send"><SendIcon size="lg" /></IconCell>
        <IconCell name="Reply"><ReplyIcon size="lg" /></IconCell>
        <IconCell name="Forward"><ForwardIcon size="lg" /></IconCell>
      </Section>

      <Section title="Commerce">
        <IconCell name="ShoppingCart"><ShoppingCartIcon size="lg" /></IconCell>
        <IconCell name="ShoppingBag"><ShoppingBagIcon size="lg" /></IconCell>
        <IconCell name="CreditCard"><CreditCardIcon size="lg" /></IconCell>
        <IconCell name="DollarSign"><DollarSignIcon size="lg" /></IconCell>
        <IconCell name="Tag"><TagIcon size="lg" /></IconCell>
        <IconCell name="Receipt"><ReceiptIcon size="lg" /></IconCell>
        <IconCell name="Store"><StoreIcon size="lg" /></IconCell>
        <IconCell name="Gift"><GiftIcon size="lg" /></IconCell>
      </Section>

      <Section title="Editing">
        <IconCell name="Bold"><BoldIcon size="lg" /></IconCell>
        <IconCell name="Italic"><ItalicIcon size="lg" /></IconCell>
        <IconCell name="Underline"><UnderlineIcon size="lg" /></IconCell>
        <IconCell name="Strikethrough"><StrikethroughIcon size="lg" /></IconCell>
        <IconCell name="AlignLeft"><AlignLeftIcon size="lg" /></IconCell>
        <IconCell name="AlignCenter"><AlignCenterIcon size="lg" /></IconCell>
        <IconCell name="AlignRight"><AlignRightIcon size="lg" /></IconCell>
        <IconCell name="ListOrdered"><ListOrderedIcon size="lg" /></IconCell>
      </Section>

      <Section title="Brands">
        <IconCell name="GitHub"><GitHubIcon size="lg" /></IconCell>
        <IconCell name="X / Twitter"><XTwitterIcon size="lg" /></IconCell>
        <IconCell name="Facebook"><FacebookIcon size="lg" /></IconCell>
        <IconCell name="Instagram"><InstagramIcon size="lg" /></IconCell>
        <IconCell name="LinkedIn"><LinkedInIcon size="lg" /></IconCell>
        <IconCell name="YouTube"><YouTubeIcon size="lg" /></IconCell>
        <IconCell name="TikTok"><TikTokIcon size="lg" /></IconCell>
        <IconCell name="Reddit"><RedditIcon size="lg" /></IconCell>
        <IconCell name="Discord"><DiscordIcon size="lg" /></IconCell>
        <IconCell name="Slack"><SlackIcon size="lg" /></IconCell>
        <IconCell name="Twitch"><TwitchIcon size="lg" /></IconCell>
        <IconCell name="Pinterest"><PinterestIcon size="lg" /></IconCell>
        <IconCell name="Snapchat"><SnapchatIcon size="lg" /></IconCell>
        <IconCell name="Spotify"><SpotifyIcon size="lg" /></IconCell>
        <IconCell name="Apple"><AppleIcon size="lg" /></IconCell>
        <IconCell name="Google"><GoogleIcon size="lg" /></IconCell>
        <IconCell name="Microsoft"><MicrosoftIcon size="lg" /></IconCell>
        <IconCell name="WhatsApp"><WhatsAppIcon size="lg" /></IconCell>
        <IconCell name="Telegram"><TelegramIcon size="lg" /></IconCell>
        <IconCell name="Threads"><ThreadsIcon size="lg" /></IconCell>
        <IconCell name="Bluesky"><BlueskyIcon size="lg" /></IconCell>
        <IconCell name="Dribbble"><DribbbleIcon size="lg" /></IconCell>
        <IconCell name="Figma"><FigmaIcon size="lg" /></IconCell>
      </Section>
    </div>
  ),
  args: { children: undefined as unknown as React.ReactNode },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'end', gap: 16 }}>
      {ICON_SIZES.map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <SearchIcon size={size} />
          <span style={{ fontSize: 11, color: '#666' }}>{size}</span>
        </div>
      ))}
    </div>
  ),
  args: { children: undefined as unknown as React.ReactNode },
};

export const Colored: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <HeartIcon size="lg" className="text-red-500" />
      <StarIcon size="lg" className="text-yellow-500" />
      <CheckCircleIcon size="lg" className="text-green-500" />
      <InfoIcon size="lg" className="text-blue-500" />
      <WarningIcon size="lg" className="text-orange-500" />
    </div>
  ),
  args: { children: undefined as unknown as React.ReactNode },
};
