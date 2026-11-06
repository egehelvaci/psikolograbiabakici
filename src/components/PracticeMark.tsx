/** A small stack of play shapes, shared by the masthead and signature. */
export default function PracticeMark() {
  return (
    <svg className="practice-mark" viewBox="0 0 44 48" fill="none" aria-hidden="true">
      <circle cx="26" cy="8" r="6" fill="currentColor" />
      <rect x="7" y="16" width="30" height="6" rx="3" fill="currentColor" transform="rotate(-9 22 19)" />
      <path fillRule="evenodd" d="M3 44v-4a18 18 0 0 1 36 0v4H29v-4a8 8 0 0 0-16 0v4Z" fill="currentColor" />
    </svg>
  );
}
