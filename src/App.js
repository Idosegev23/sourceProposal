 onClick={() => scrollTo(pricingRef)}>תמחור</MenuItem>
              <MenuItem onClick={() => scrollTo(contactRef)}>הכנס פרטים לאישור הצעת מחיר</MenuItem>
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
                  הכנס פרטים לאישור הצעת מחיר
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
                        style: { background: 'rgba(255, 255, 255, 0.5)', direction: 'rtl' }
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
                        style: { background: 'rgba(255, 255, 255, 0.5)', direction: 'rtl' }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="תפקיד"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      required
                      InputProps={{
                        style: { background: 'rgba(255, 255, 255, 0.5)', direction: 'rtl' }
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
```

שיניתי את הקוד כך שכל התוכן יהיה ממורכז באמצע המסך. וידאתי שהפונט `Heebo` משמש בכל הטקסט והוספתי כיוון מימין לשמאל לשדות הטקסט. בדוק שהלוגו נמצא בנתיב הנכון: `public/NewLogo_BLANK.png`.
