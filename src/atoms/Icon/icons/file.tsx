import {
  File,
  Folder,
  FileText,
  Cloud,
  FolderOpen,
  Archive,
  HardDrive,
  CloudUpload,
  CloudDownload,
} from 'lucide';
import { createLucideIcon } from './createLucideIcon';

export const FileIcon = createLucideIcon(File, 'FileIcon');
export const FolderIcon = createLucideIcon(Folder, 'FolderIcon');
export const DocumentIcon = createLucideIcon(FileText, 'DocumentIcon');
export const CloudIcon = createLucideIcon(Cloud, 'CloudIcon');
export const FolderOpenIcon = createLucideIcon(FolderOpen, 'FolderOpenIcon');
export const ArchiveIcon = createLucideIcon(Archive, 'ArchiveIcon');
export const HardDriveIcon = createLucideIcon(HardDrive, 'HardDriveIcon');
export const CloudUploadIcon = createLucideIcon(CloudUpload, 'CloudUploadIcon');
export const CloudDownloadIcon = createLucideIcon(CloudDownload, 'CloudDownloadIcon');
