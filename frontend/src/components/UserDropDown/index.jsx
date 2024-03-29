import React from 'react'
import { Box, Avatar, Menu, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Stack } from '@mui/material';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles'
import { appBlackcolor } from 'theme/colors';
import { localstorageService } from 'utils/localStorageService';



const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.primary,
}));

const UserDropDown = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const user = useSelector((state) => state?.user?.userInfo)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localstorageService.logout("/login")
    }

    const iconColor = { color: appBlackcolor, minWidth: '40px' }

    return (
        <>
            <Stack direction='column' alignItems='center' spacing={1}>
                <Avatar alt="avatar" onClick={handleClick} sx={{ cursor: 'pointer' }}>
                    {user.username && user?.username?.charAt(0)}
                </Avatar>
                <Typography>{user?.username}</Typography>
            </Stack>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <StyledLink to='/'>
                    <ListItem disablePadding onClick={handleClose}>
                        <ListItemButton>
                            <ListItemIcon sx={iconColor}>
                                <BorderColorOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                </StyledLink>
                <StyledLink to='/'>
                    <ListItem disablePadding onClick={handleClose}>
                        <ListItemButton>
                            <ListItemIcon sx={iconColor}>
                                <PhoneOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Contact us" />
                        </ListItemButton>
                    </ListItem>
                </StyledLink>
                <StyledLink to='/legal-agreement'>
                    <ListItem disablePadding onClick={handleClose}>
                        <ListItemButton>
                            <ListItemIcon sx={iconColor}>
                                <AssignmentOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Legal Agreement" />
                        </ListItemButton>
                    </ListItem>
                </StyledLink>
                {/* <StyledLink to='/login'> */}
                <ListItem disablePadding>
                    <ListItemButton onClick={handleLogout}>
                        <ListItemIcon sx={iconColor}>
                            <LogoutOutlinedIcon sx={{ rotate: '180deg' }} />
                        </ListItemIcon>
                        <ListItemText primary="Sign Out" />
                    </ListItemButton>
                </ListItem>
                {/* </StyledLink> */}
            </Menu>
        </>
    )
}

export default UserDropDown