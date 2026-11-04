// export function Footer() {
//   return (
//     <footer className="site-footer">
//       <div className="container">
//         <p className="site-footer-copy">Copyright &copy; 2026 - MovieVerse. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }
import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Лева страна: Поголемо лого */}
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <span className="footer-logo-mark">MV</span>
            <span className="footer-logo-text">MovieVerse</span>
          </Link>
        </div>

        {/* Десна страна: Линкови */}
        <div className="footer-nav">
          <Link href="/" className="footer-link">About MovieVerse</Link>
          <Link href="/" className="footer-link">Terms of Use</Link>
          <Link href="/" className="footer-link">Privacy Policy</Link>
        </div>
      </div>

      {/* Дно на футерот */}
      <div className="footer-bottom">
        <div className="container text-center">
          <p className="site-footer-copy">Copyright &copy; 2026 - MovieVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}