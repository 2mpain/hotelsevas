import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import { Button } from "@/components/ui/button"
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import { Menu } from 'lucide-react';
import "../../index.css";
import { useTheme } from "@/components/ui/theme-provider";


export default function DrawerComp() {
  const [open, setOpen] = React.useState(false);

  const { theme } = useTheme();
  
  const toggleDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpen(inOpen);
    };

  return (
    <Box sx={{ }}>
      <Button size="icon" className='my-2'>
      <Menu className={`burger ${theme === "dark" ? "dark-burger" : ""}`} color={theme === "dark" ? "black" : "white"} onClick={toggleDrawer(true)} />
      </Button>
      
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {['О нас', 'Номера', 'Местоположение', 'Услуги'].map((text) => (
              <ListItem key={text}>
                <ListItemButton>{text}</ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Обратная Связь', 'Контакты'].map((text) => (
              <ListItem key={text}>
                <ListItemButton>{text}</ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}