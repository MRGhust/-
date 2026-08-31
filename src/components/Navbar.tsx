import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Logo = () => <a className="logo" href="#home" aria-label="دالا"><span className="logo-mark" /><span>Dala</span></a>;

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return <header className="nav-wrap"><nav className="nav section-shell">
    <Logo />
    <div className={`nav-links ${open ? 'is-open' : ''}`}>
      <a href="#products" onClick={() => setOpen(false)}>محصولات</a>
      <a href="#approach" onClick={() => setOpen(false)}>رویکرد ما</a>
      <a href="#about" onClick={() => setOpen(false)}>درباره دالا</a>
    </div>
    <a className="nav-cta" href="#contact">درخواست دسترسی</a>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-label="منو">{open ? <X /> : <Menu />}</button>
  </nav></header>;
};
export default Navbar;
