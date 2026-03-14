import { forwardRef, useRef, useState, useCallback } from 'react';
import { Text } from '../../atoms/Text';
import type { FileUploadProps } from './FileUpload.types';

const FileUpload = forwardRef<HTMLDivElement, FileUploadProps>(
  ({ accept, multiple = false, maxSize, onFilesSelected, disabled = false, helpText, className = '', ...rest }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const processFiles = useCallback(
      (fileList: FileList | null) => {
        if (!fileList) return;
        let files = Array.from(fileList);
        if (maxSize) {
          files = files.filter((f) => f.size <= maxSize);
        }
        onFilesSelected?.(files);
      },
      [maxSize, onFilesSelected],
    );

    const handleDragOver = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      if (!disabled) setIsDragging(true);
    }, [disabled]);

    const handleDragLeave = useCallback(() => setIsDragging(false), []);

    const handleDrop = useCallback(
      (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (!disabled) processFiles(e.dataTransfer.files);
      },
      [disabled, processFiles],
    );

    return (
      <div
        ref={ref}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !disabled && inputRef.current?.click()}
        role="button"
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
            e.preventDefault();
            inputRef.current?.click();
          }
        }}
        className={[
          'flex flex-col items-center justify-center gap-[var(--laurel-space-2)] rounded-[var(--laurel-radius-lg)] border-2 border-dashed p-[var(--laurel-space-8)]',
          'font-[family-name:var(--laurel-font-sans)] text-center transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-[var(--laurel-ring-brand)]',
          isDragging
            ? 'border-[var(--laurel-border-brand-accent)] bg-[var(--laurel-bg-brand-muted)]'
            : 'border-[var(--laurel-border-default)] hover:border-[var(--laurel-border-strong)]',
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-[var(--laurel-text-placeholder)]" aria-hidden="true">
          <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
        </svg>

        <div>
          <Text as="span" size="sm" weight="medium" className="text-[var(--laurel-text-brand)]">
            Click to upload
          </Text>
          <Text as="span" size="sm" className="text-[var(--laurel-text-muted)]">
            {' '}or drag and drop
          </Text>
        </div>

        {helpText && (
          <Text as="span" size="xs" className="text-[var(--laurel-text-placeholder)]">
            {helpText}
          </Text>
        )}

        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={(e) => processFiles(e.target.files)}
          className="sr-only"
          tabIndex={-1}
        />
      </div>
    );
  },
);

FileUpload.displayName = 'FileUpload';

export { FileUpload };
