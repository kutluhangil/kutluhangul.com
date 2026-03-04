export function Footer() {
  return (
    <footer className="bg-foreground text-background/60 py-12 border-t border-background/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm font-light">
          &copy; {new Date().getFullYear()} Studio Noir. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm font-light hover:text-background transition-colors">Instagram</a>
          <a href="#" className="text-sm font-light hover:text-background transition-colors">Twitter</a>
          <a href="#" className="text-sm font-light hover:text-background transition-colors">Behance</a>
        </div>
      </div>
    </footer>
  );
}
