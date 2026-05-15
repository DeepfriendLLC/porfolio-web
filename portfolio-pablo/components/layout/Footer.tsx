import { profile, projectRepoUrl } from "@/constants/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-surface-subtle/50">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-text-muted md:flex-row md:items-center md:justify-between md:px-10">
        <p>
          © {year} {profile.name}. Open source project on{" "}
          <a
            href={projectRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-text transition-colors hover:text-accent"
          >
            GitHub
          </a>
          .
        </p>
        <p className="font-mono text-xs uppercase tracking-wider">
          {profile.location}
        </p>
      </div>
    </footer>
  );
}
