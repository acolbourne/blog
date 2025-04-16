// -> Imports -> Components
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface HambugerMenuProps {
  menuIsOpen: boolean;
}

export const HamburgerMenu: React.FC<HambugerMenuProps> = ({ menuIsOpen }) => {
  return <Button variant="ghost">{menuIsOpen ? <X /> : <Menu />}</Button>;
};
