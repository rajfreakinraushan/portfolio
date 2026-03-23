export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        © {new Date().getFullYear()} Raj Raushan. Built with React, Tailwind CSS & Framer Motion.
      </p>
    </footer>
  );
}
