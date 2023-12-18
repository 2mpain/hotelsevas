import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import { Button } from "@/components/readyToUse/button"
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import { Menu } from 'lucide-react';
import "../../index.css";
import { useTheme } from "@/components/readyToUse/theme-provider";
import {Navigate, useNavigate} from 'react-router-dom'


export default function DrawerComp() {

  const navigate = useNavigate();
  
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


  const drawerItems = [
    {
      id: 1,
      text: 'О нас',
      page: '/aboutUs'
    },
    {
      id: 2,
      text: 'Номера',
      page: '/rooms'
    },
    {
      id: 3,
      text: 'Местоположение',
      page: '/location',
    },
    {
      id: 4,
      text: 'Услуги',
      page: '/services'
    },
    {
      id: 5,
      text: 'Обратная связь',
      page: '/feedback'
    },
    {
      id: 6,
      text: 'Контакты',
      page: '/contacts'
    },
  ]

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
            {drawerItems.slice(0, 4).map((item) => (
              <ListItem key={item.id} onClick={() => navigate(item.page)}>
                <ListItemButton>{item.text}</ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {drawerItems.slice(4).map((item) => (
              <ListItem key={item.id}>
                <ListItemButton>{item.text}</ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}