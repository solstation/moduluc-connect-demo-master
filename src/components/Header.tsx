import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import { useAuth } from "src/core/hooks/useAuth";

const pages = [
  {
    title: "Plan",
    link: "/plan",
  },
  {
    title: "Components",
    link: "/components",
  },
];
const settings = [
  {
    title: "Me",
    link: "/profile",
  },
  {
    title: "Wallets",
    link: "/profile/wallets",
  },
];

function ResponsiveAppBar() {
  const { user, signOut } = useAuth();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const router = useRouter();
  const handleCloseNavMenu = (link: string) => {
    router.push(link);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [isLogin, setIsLogin] = useState(false);



  useEffect(() => {
    if (user) {
      setIsLogin(true);
      console.log(user, "==> header user");
    } else {
      setIsLogin(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Moduluc Connect
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {isLogin && (
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, key) => (
                  <MenuItem
                    key={key}
                    onClick={() => handleCloseNavMenu(page.link)}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            )}
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Moduluc Connect
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {isLogin &&
              pages.map((page, key) => (
                <Button
                  key={key}
                  onClick={() => handleCloseNavMenu(page.link)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              ))}
          </Box>
          {isLogin ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={user?.profile?.avatId} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, key) => (
                  <MenuItem key={key} onClick={handleCloseUserMenu}>
                    <Button onClick={() => router.push(setting.link)}>
                      {setting.title}
                    </Button>
                  </MenuItem>
                ))}
                <MenuItem onClick={handleCloseUserMenu}>
                  <Button onClick={handleSignout}>logout</Button>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Button
                variant="contained"
                sx={{ color: "#fff", mr: 2 }}
                onClick={() => router.push("/signin")}
              >
                Signin
              </Button>
              <Button
                variant="contained"
                sx={{ color: "#fff" }}
                color="secondary"
                onClick={() => router.push("/signup")}
              >
                register
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
