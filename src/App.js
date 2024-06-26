import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated, config } from 'react-spring';
import { Typography, Container, Box, Grid, AppBar, Toolbar, Button, IconButton, Menu, MenuItem, TextField } from '@mui/material';
import { Facebook, Instagram, MessageCircle, Menu as MenuIcon } from 'lucide-react';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import '@fontsource/heebo';
import '@fontsource/dancing-script';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';

const StyledContainer = styled(Container)`
  min-height: 100vh;
  padding: ${props => props.theme.spacing(4)}px;
  direction: rtl;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to right, #f8f9fa, #e9ecef);
  color: #0D0D0D;
`;

const Content = styled('div')`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
`;

const Logo = styled('img')`
  width: 200px;
  margin: 0 auto 2rem;
  display: block;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 3rem;
  margin-bottom: 3rem;
`;

const SocialLinks = styled('div')`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialIcon = styled(motion.a)`
  color: #62238C;
  &:hover {
    color: #BF4B81;
  }
`;

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #62238C, #BF4B81);
  border: none;
  color: white;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.4rem;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 25px;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #BF4B81, #62238C);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }
`;

const Footer = styled('footer')`
  text-align: center;
  padding: 1rem;
  background: rgba(245, 245, 245, 0.7);
  backdrop-filter: blur(10px);
  color: #333;
  position: relative;
  z-index: 2;
`;

const StyledAppBar = styled(AppBar)`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  box-shadow: none;
  position: sticky;
  top: 0;
  margin-bottom: 2rem;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
`;

const NavButtons = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const StyledNavButton = styled(Button)`
  color: #62238C;
  font-size: 1.4rem;
  margin: 0 1rem;
  font-weight: 600;
  &:hover {
    background-color: rgba(98, 35, 140, 0.1);
  }
`;

const MobileMenuButton = styled(IconButton)`
  position: absolute;
  left: 1rem;
  top: 1rem;
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;

const PageTitle = styled(Typography)`
  font-family: 'Dancing Script', cursive;
  color: #62238C;
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headerAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(-50px)',
    config: config.molasses,
  });

  const titleAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: config.wobbly,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:triroars@gmail.com?subject=הצעת המחיר מאושרת&body=שלום עידו, אני מאשר את הצעת המחיר. שמי הוא ${name} והאימייל שלי הוא ${email}.`;
  };

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuAnchor(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <StyledContainer maxWidth={false}>
          <Content>
            <StyledAppBar>
              <StyledToolbar>
                <Logo src="/NewLogo_BLANK.png" alt="TriRoars Logo" />
                <PageTitle variant="h1">
                  TriRoars
                </PageTitle>
                <NavButtons>
                  <StyledNavButton onClick={() => scrollTo(aboutRef)}>אודות</StyledNavButton>
                  <StyledNavButton onClick={() => scrollTo(servicesRef)}>שירותים</StyledNavButton>
                  <StyledNavButton onClick={() => scrollTo(pricingRef)}>תמחור</StyledNavButton>
                  <StyledNavButton onClick={() => scrollTo(contactRef)}>צור קשר</StyledNavButton>
                </NavButtons>
                <MobileMenuButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMobileMenuOpen}
                >
                  <MenuIcon />
                </MobileMenuButton>
              </StyledToolbar>
            </StyledAppBar>
            <Menu
              anchorEl={mobileMenuAnchor}
              open={Boolean(mobileMenuAnchor)}
              onClose={handleMobileMenuClose}
            >
              <MenuItem onClick={() => scrollTo(aboutRef)}>אודות</MenuItem>
              <MenuItem onClick={() => scrollTo(servicesRef)}>שירותים</MenuItem>
              <MenuItem onClick={() => scrollTo(pricingRef)}>תמחור</MenuItem>
              <MenuItem onClick={() => scrollTo(contactRef)}>צור קשר</MenuItem>
            </Menu>
            
            <Card ref={aboutRef}>
              <animated.div style={titleAnimation}>
                <Typography variant="h3" gutterBottom style={{ color: '#62238C' }}>
                  אודות TriRoars
                </Typography>
              </animated.div>
              <Typography variant="body1" paragraph>
                <strong>שלום, שמי עידו שגב, מנכ"ל חברת TriRoars.</strong> אנו מתמחים בהדרכה ובהטמעת פתרונות בינה מלאכותית ואוטומציה עסקית המותאמים אישית לצרכי הלקוחות שלנו.
              </Typography>
              <Typography variant="body1" paragraph>
                ב-TriRoars, אנו מאמינים בכוח של טכנולוגיה מתקדמת לשפר ולייעל תהליכים עסקיים. <strong>אנו מחויבים לספק פתרונות חדשניים שיקדמו את העסק שלכם לעבר העתיד.</strong>
              </Typography>
            </Card>

            <Card ref={servicesRef}>
              <animated.div style={titleAnimation}>
                <Typography variant="h4" gutterBottom style={{ color: '#62238C' }}>
                  הצעת מחיר לסדנת AI מתקדמת
                </Typography>
              </animated.div>
              <Typography variant="body1" paragraph>
                <strong>שלום איתי,</strong>
              </Typography>
              <Typography variant="body1" paragraph>
                אנו שמחים להציג בפניך הצעת מחיר לסדנת AI חדשנית ומתקדמת עבור מחלקת הפיתוח בחברת Source Tactical Gear. <strong>סדנה זו תפתח בפניכם עולם של אפשרויות טכנולוגיות חדשות ותעצים את יכולות הצוות שלכם.</strong>
              </Typography>
              <Box component="ul" style={{ fontSize: '1.4rem' }}>
                <li><strong>מספר משתתפים:</strong> 10-15 איש</li>
                <li><strong>משך הסדנה:</strong> סדנה מעשית אינטנסיבית בת 5 שעות</li>
                <li><strong>דרישות:</strong> מחשבים ניידים עם חיבור לאינטרנט</li>
              </Box>
              <Typography variant="h5" gutterBottom style={{ color: '#62238C', marginTop: '2rem' }}>
                נושאי הסדנה
              </Typography>
              <Box component="ul" style={{ fontSize: '1.4rem' }}>
                <li>סקירה מקיפה של טכנולוגיות AI מתקדמות וישומיהן בתעשיית הציוד הטקטי</li>
                <li>עבודה מעשית עם ChatGPT - מעבר לשימושים בסיסיים</li>
                <li>טכניקות מתקדמות לאימון והתאמה של מודלי AI לצרכים ספציפיים של Source Tactical Gear</li>
                <li>יצירת GPT מותאם אישית לתהליכי העבודה הייחודיים שלכם</li>
                <li>בניית תהליכי אוטומציה חכמים מבוססי AI לייעול תהליכי הייצור והלוגיסטיקה</li>
                <li>אינטגרציה של טכנולוגיות AI בתהליכי העבודה הקיימים של החברה</li>
                <li>סקירת מגמות עתידיות ב-AI וכיצד הן עשויות להשפיע על תעשיית הציוד הטקטי</li>
              </Box>
            </Card>

            <Card ref={pricingRef}>
              <animated.div style={titleAnimation}>
                <Typography variant="h4" gutterBottom style={{ color: '#62238C' }}>
                  תמחור
                </Typography>
              </animated.div>
              <Box component="ul" style={{ fontSize: '1.4rem' }}>
                <li><strong>מחיר הסדנה:</strong> 4,000 ₪ (לא כולל מע"מ)</li>
                <li><strong>עלות נסיעות:</strong> 200 ₪ לכיוון</li>
                <li><strong>תנאי תשלום:</strong> שוטף + 30 לכל המאוחר</li>
              </Box>
              <Typography variant="body1" paragraph style={{ marginTop: '2rem' }}>
                <strong>אנו ממליצים לשקול רכישת מנוי ברמת חברה ל-ChatGPT בעלות של 25$ למשתמש.</strong> זה יאפשר לכם להתחיל ליישם את הנלמד באופן מיידי ולראות תוצאות מהירות בתהליכי העבודה שלכם.
              </Typography>
            </Card>

            <Card ref={contactRef}>
              <animated.div style={titleAnimation}>
                <Typography variant="h4" gutterBottom style={{ color: '#62238C' }}>
                  צור קשר
                </Typography>
              </animated.div>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="שם מלא"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      InputProps={{
                        style: { background: 'rgba(255, 255, 255, 0.5)' }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      type="email"
                      label="כתובת אימייל"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      InputProps={{
                        style: { background: 'rgba(255, 255, 255, 0.5)' }
                      }}
                    />
                  </Grid>
                </Grid>
                <Box mt={3}>
                  <StyledButton
                    type="submit"
                    component={motion.button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    אשר הצעת מחיר
                  </StyledButton>
                </Box>
              </form>
            </Card>

            <SocialLinks>
              <SocialIcon
                href="https://www.facebook.com/profile.php?id=61553596496338"
                target="_blank"
                rel="noopener noreferrer"
                component={motion.a}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={40} />
              </SocialIcon>
              <SocialIcon
                href="https://www.instagram.com/triroars/"
                target="_blank"
                rel="noopener noreferrer"
                component={motion.a}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={40} />
              </SocialIcon>
              <SocialIcon
                href="https://wa.me/972547667775"
                target="_blank"
                rel="noopener noreferrer"
                component={motion.a}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MessageCircle size={40} />
              </SocialIcon>
            </SocialLinks>
            
            <Box mt={4}>
              <Typography variant="body1" style={{ textAlign: 'center', fontWeight: 'bold' }}>
                בברכה,<br />
                עידו שגב<br />
                מנכ"ל TriRoars<br />
                אימייל: Triroars@gmail.com<br />
                טלפון: 054-7667775
              </Typography>
            </Box>
          </Content>
          <Footer>
            <Typography variant="body2" style={{ fontSize: '1.2rem' }}>
              נבנה באמצעות AI &copy; {new Date().getFullYear()} TriRoars
            </Typography>
          </Footer>
        </StyledContainer>
      </ParallaxProvider>
    </ThemeProvider>
  );
};

export default App;