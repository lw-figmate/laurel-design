import { forwardRef } from 'react';
import {
  siGithub,
  siX,
  siFacebook,
  siInstagram,
  siYoutube,
  siTiktok,
  siReddit,
  siDiscord,
  siTwitch,
  siPinterest,
  siSpotify,
  siApple,
  siGoogle,
  siWhatsapp,
  siTelegram,
  siThreads,
  siBluesky,
  siDribbble,
  siFigma,
  siSnapchat,
} from 'simple-icons';
import { Icon } from '../Icon';
import type { NamedIconProps } from './types';

/**
 * Factory that wraps a simple-icons object as a React component.
 * simple-icons use a 24×24 viewBox, so we override the default 20×20.
 */
export function createBrandIcon(si: { path: string }, name: string) {
  const Component = forwardRef<SVGSVGElement, NamedIconProps>((props, ref) => (
    <Icon ref={ref} viewBox="0 0 24 24" {...props}>
      <path d={si.path} />
    </Icon>
  ));
  Component.displayName = name;
  return Component;
}

// ── 20 brands from simple-icons (official SVG paths) ─────────────────

export const GitHubIcon = createBrandIcon(siGithub, 'GitHubIcon');
export const XTwitterIcon = createBrandIcon(siX, 'XTwitterIcon');
export const FacebookIcon = createBrandIcon(siFacebook, 'FacebookIcon');
export const InstagramIcon = createBrandIcon(siInstagram, 'InstagramIcon');
export const YouTubeIcon = createBrandIcon(siYoutube, 'YouTubeIcon');
export const TikTokIcon = createBrandIcon(siTiktok, 'TikTokIcon');
export const RedditIcon = createBrandIcon(siReddit, 'RedditIcon');
export const DiscordIcon = createBrandIcon(siDiscord, 'DiscordIcon');
export const TwitchIcon = createBrandIcon(siTwitch, 'TwitchIcon');
export const PinterestIcon = createBrandIcon(siPinterest, 'PinterestIcon');
export const SpotifyIcon = createBrandIcon(siSpotify, 'SpotifyIcon');
export const AppleIcon = createBrandIcon(siApple, 'AppleIcon');
export const GoogleIcon = createBrandIcon(siGoogle, 'GoogleIcon');
export const WhatsAppIcon = createBrandIcon(siWhatsapp, 'WhatsAppIcon');
export const TelegramIcon = createBrandIcon(siTelegram, 'TelegramIcon');
export const ThreadsIcon = createBrandIcon(siThreads, 'ThreadsIcon');
export const BlueskyIcon = createBrandIcon(siBluesky, 'BlueskyIcon');
export const DribbbleIcon = createBrandIcon(siDribbble, 'DribbbleIcon');
export const FigmaIcon = createBrandIcon(siFigma, 'FigmaIcon');
export const SnapchatIcon = createBrandIcon(siSnapchat, 'SnapchatIcon');

// ── 3 brands not in simple-icons v16 (removed by legal request) ─────

export const LinkedInIcon = forwardRef<SVGSVGElement, NamedIconProps>((props, ref) => (
  <Icon ref={ref} viewBox="0 0 24 24" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </Icon>
));
LinkedInIcon.displayName = 'LinkedInIcon';

export const SlackIcon = forwardRef<SVGSVGElement, NamedIconProps>((props, ref) => (
  <Icon ref={ref} viewBox="0 0 24 24" {...props}>
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
  </Icon>
));
SlackIcon.displayName = 'SlackIcon';

export const MicrosoftIcon = forwardRef<SVGSVGElement, NamedIconProps>((props, ref) => (
  <Icon ref={ref} viewBox="0 0 24 24" {...props}>
    <path d="M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623" />
  </Icon>
));
MicrosoftIcon.displayName = 'MicrosoftIcon';
