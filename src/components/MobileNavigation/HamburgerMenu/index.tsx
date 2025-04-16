// -> Imports -> Components
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface HambugerMenuProps {
  menuIsOpen: boolean;
  onClick: () => void;
}

export const HamburgerMenu: React.FC<HambugerMenuProps> = ({ menuIsOpen, onClick }) => {
  return (
    <Button variant="ghost" onClick={onClick}>
      {menuIsOpen ? <X /> : <Menu />}
    </Button>
  );
};
