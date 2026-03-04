export function Footer() {
  return (
    <footer className="bg-foreground text-background/60 py-12 border-t border-background/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm font-light">
          &copy; {new Date().getFullYear()} Kutluhan Gül. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="https://linkedin.com" target="_blank" className="text-sm font-light hover:text-background transition-colors">LinkedIn</a>
          <a href="https://github.com" target="_blank" className="text-sm font-light hover:text-background transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
