import React, { Fragment } from "react";
import { Box, Container, Grid } from "@mui/material";
import bg from "../assets/backgrounds/vector.png";
import SearchSection from "../components/Home/SearchSection";
import JobCategoryCardList from "../components/Home/JobCategoryCardList";
import TopCompaniesCardList from "../components/Home/TopCompaniesCardList";
import RecentJobSection from "../components/Home/RecentJobSection";
import OrbitAnimation from "../components/Home/OrbitAnimation";
import SlideShowAd from "../components/Home/SlideShowAd";
import DownloadOurApp from "../components/Home/DownloadOurApp";
import BannerAd from "../components/Home/Ads/BannerAd";
import { useSelector } from "react-redux";
import SEO from "../components/Common/SEO";
import VacancySection from "../components/Home/VacancySection";
import ApplicationList from "../components/Home/ApplicationList";
import RecentAppliedSection from "../components/Home/RecentAppliedSection";
import MessengerChat from "../components/MessengerChat";
import NewlyJobList from "../components/Home/NewlyJobList";
import ArticleSection from "../components/Home/ArticleSection";
import TopIndustriesList from "../components/Home/TopIndustriesList";
import SubscriptionAdCard from "../components/Home/SubscriptionAdCard";
import GetNotificationFooter from "../components/GetNotificationFooter";
import TopHiringCompanySection from "../components/Home/TopHiringCompanySection";
// import DownloadPhoto from '../assets/images/download.png';
// import appStore from '../assets/images/AppleStoreImg.png';
// import googlePlay from '../assets/images/GooglePlayStoreImg.png';

function Home() {
  // const theme = useTheme();
  // const dispatch = useDispatch();
  // const {links} = useSelector(x => x.app);
  // const [loading, setLoading] = useState(true);
  // const [open, setOpen] = React.useState(false);
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  // const initFetch = useCallback(() => {
  //     dispatch(appActions.get()).then(() => {
  //         setLoading(false);
  //     })
  // }, [dispatch]);
  // useEffect(() => {
  //     dispatch(setProgress(30));
  //     initFetch()
  //     dispatch(setProgress(100));
  //
  //     if (sessionStorage.getItem('isOpen') !== 'true') {
  //         setOpen(true)
  //         sessionStorage.setItem('isOpen', 'true');
  //     }
  //
  //     // eslint-disable-next-line
  // }, [initFetch]);

  const { isEmpLoggedIn } = useSelector((state) => state.empAuth);

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      backgroundColor="white"
    >
      <SEO />
      <MessengerChat />
      <Grid
        item
        xs={12}
        container
        sx={{
          zIndex: 3,
          position: "relative",
          backgroundSize: "100% auto",
          backgroundClip: "content-box",
          backgroundOrigin: "content-box",
        }}
      >
        <Grid
          item
          container
          xs={12}
          sx={{
            position: "relative",
            background: "rgba(33, 37, 41, 0.6)",
            height: {
              xs: "400px",
              sm: "396px",
              md: "450px",
              lg: "607px",
              xl: "646px",
            },
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              position: "relative",
              zIndex: -1,
            }}
          >
            <SlideShowAd />
          </Grid>
          <Grid
            container
            item
            xs={12}
            zIndex={9}
            position="absolute"
            padding={0}
            height={{
              xs: "400px",
              sm: "400px",
              md: "400px",
              lg: "559px",
            }}
            justifyContent="center"
            alignItems="center"
          >
            <Container maxWidth="xl" sx={{ paddingRight: "0px !important" }}>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                paddingLeft={{ lg: "30px", xl: 0 }}
              >
                <Grid item xs={12} md={7} lg={7}>
                  <SearchSection />
                </Grid>
                <OrbitAnimation />
              </Grid>
            </Container>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sx={{
            marginTop: {
              xs: "-35px",
              sm: "-61px",
              md: "-81px",
              lg: "-114px",
              xl: "-150px",
            },
            position: "relative",
            backgroundSize: "100% auto",
            backgroundClip: "content-box",
            backgroundImage: `url(${bg})`,
            backgroundOrigin: "content-box",
            height: "100%",
            width: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Grid container width="100%">
            <Grid item xs={12} sx={{ marginTop: "100px" }}>
              <Grid container>
                {isEmpLoggedIn ? <ApplicationList /> : <JobCategoryCardList />}
                <DownloadOurApp />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {!isEmpLoggedIn && (
        <Grid item xs={12}>
          <Grid container>
            <TopCompaniesCardList />
            <TopHiringCompanySection />
            <RecentJobSection />
          </Grid>
        </Grid>
      )}

      {isEmpLoggedIn && (
        <Container maxWidth="xl">
          <Box paddingY={4}>
            <BannerAd />
          </Box>
        </Container>
      )}

      {isEmpLoggedIn && (
        <Fragment>
          <VacancySection />
          <RecentAppliedSection />
        </Fragment>
      )}

      <Container maxWidth="xl">
        {!isEmpLoggedIn && (
          <Grid container sx={{ background: "white" }}>
            <NewlyJobList />
            <TopIndustriesList />
            <BannerAd />
          </Grid>
        )}

        <SubscriptionAdCard />
        <ArticleSection isShowBorder={false} isShowBtn={false} />
      </Container>

      <GetNotificationFooter />

      {/*<Dialog fullWidth={fullScreen}*/}
      {/*        maxWidth={'md'}*/}
      {/*        open={open}*/}
      {/*        PaperProps={{*/}
      {/*            style: {*/}
      {/*                overflowY: 'visible',*/}
      {/*            }*/}
      {/*        }}*/}
      {/*        disableScrollLock={true}*/}
      {/*>*/}
      {/*    <Box p={{xs: 2, sm: 5, md: 2, lg: 2, xl: 5}} sx={{display: 'flex'}}>*/}
      {/*        <Grid container justify="center"*/}
      {/*              alignItems="center"*/}
      {/*        >*/}
      {/*            <Grid item xs={5}>*/}
      {/*                <Box mb={2} p={{xs: 1, sm: 4, md: 11, lg: 10, xl: 5}} py={{md: 4.6}}>*/}
      {/*                    <img src={DownloadPhoto} alt="Download" width="100%"/>*/}
      {/*                </Box>*/}
      {/*            </Grid>*/}
      {/*            <Grid item xs={7} pt={{xs: 0, sm: 3, md: 0, lg: 0, xl: 3}}>*/}
      {/*                <Box mb={2}>*/}
      {/*                    <Box>*/}
      {/*                        <Typography*/}
      {/*                            fontSize={{xs: '16px', sm: '24px', xl: '30px'}}*/}
      {/*                            py={{xs: 1, sm: 3, xl: 5}}*/}
      {/*                            lineHeight={{xs: '20px', xl: '46px'}}*/}
      {/*                            sx={{*/}
      {/*                                fontStyle: 'normal',*/}
      {/*                                fontWeight: 600,*/}
      {/*                                color: '#464348'*/}
      {/*                            }}*/}
      {/*                        >*/}
      {/*                            Access JobSpace Myanmar anytime & anywhere.*/}
      {/*                        </Typography>*/}
      {/*                        <Typography fontSize={{xs: '12px', sm: '14px', xl: '16px'}}*/}
      {/*                                    sx={{*/}
      {/*                                        fontStyle: 'normal',*/}
      {/*                                        fontWeight: 400,*/}
      {/*                                        lineHeight: '24px'*/}
      {/*                                    }}>*/}
      {/*                            It's all at your fingertips – Get an amazing opportunities to use this JobSpace app.*/}
      {/*                        </Typography>*/}

      {/*                        <Typography fontSize={{xs: '12px', sm: '14px', xl: '16px'}}*/}
      {/*                                    pb={{xs: 2, sm: 3, xl: 5,}}*/}
      {/*                                    sx={{*/}
      {/*                                        fontStyle: 'normal',*/}
      {/*                                        fontWeight: 400,*/}
      {/*                                        lineHeight: '24px',*/}
      {/*                                        color: '#00A0DC'*/}
      {/*                                    }}>*/}
      {/*                            Go ahead, download us.*/}
      {/*                        </Typography>*/}
      {/*                        <Stack direction={'row'} justify={'center'} alignItems={'center'}>*/}
      {/*                            <Box mr={2}>*/}
      {/*                                {!loading ?*/}
      {/*                                    <a href={links.appstore_url} target="_blank" rel="noreferrer"> <img*/}
      {/*                                        src={appStore} alt="appStore" width="100%"/>*/}
      {/*                                    </a> : null}*/}
      {/*                            </Box>*/}
      {/*                            <Box mr={2}>*/}
      {/*                                {!loading ?*/}
      {/*                                    <a href={links.playstore_url} target="_blank" rel="noreferrer"> <img*/}
      {/*                                        src={googlePlay} alt="googlePlay" width="100%"/>*/}
      {/*                                    </a> : null}*/}
      {/*                            </Box>*/}
      {/*                        </Stack>*/}
      {/*                        <Stack direction={'column'} alignItems="end">*/}
      {/*                            <Typography*/}
      {/*                                mt={{xs: 2, sm: 8, md: 5, lg: 8}}*/}
      {/*                                mr={{md: 8, lg: 0}}*/}
      {/*                                width={{xs: '76%', sm: '60%', md: '46%', lg: '76%'}}*/}
      {/*                                fontSize={{xs: '18px', sm: '34px', lg: '48px'}}*/}
      {/*                                lineHeight={{xs: '29px', sm: '49px', lg: '69px'}}*/}
      {/*                                mb={{xs: 0.4, sm: 0.9, lg: 1.3}}*/}
      {/*                                sx={{*/}
      {/*                                    background: 'linear-gradient(271.79deg, #0C81AC -40.85%, #00A0DC 41.19%, #0C81AC 106.82%)',*/}
      {/*                                    transform: 'rotate(-5.95deg)',*/}
      {/*                                    px: 2,*/}
      {/*                                    fontStyle: 'normal',*/}
      {/*                                    fontWeight: 500,*/}
      {/*                                    color: '#FFFFFF',*/}
      {/*                                    textAlign: 'center',*/}
      {/*                                }}>*/}
      {/*                                DOWNLOAD*/}
      {/*                            </Typography>*/}

      {/*                            <Typography*/}
      {/*                                mr={{xs: 0.5, sm: 1.8, md: 10, lg: 7}}*/}
      {/*                                fontSize={{xs: '14px', sm: '30px', lg: '36px'}}*/}
      {/*                                width={{xs: '50%', sm: '40%', md: '32%', lg: '45%'}}*/}
      {/*                                lineHeight={{sm: '40px', lg: '52px'}}*/}
      {/*                                px={{xs: 0, lg: 2}}*/}
      {/*                                sx={{*/}
      {/*                                    background: 'linear-gradient(271.79deg, #195DCC -40.85%, #5693F8 41.19%, #195DCC 106.82%)',*/}
      {/*                                    transform: 'rotate(1.3deg)',*/}
      {/*                                    fontStyle: 'normal',*/}
      {/*                                    fontWeight: 500,*/}
      {/*                                    textAlign: 'center',*/}
      {/*                                    color: '#FFFFFF',*/}
      {/*                                }}*/}
      {/*                            >*/}
      {/*                                OUR APP*/}
      {/*                            </Typography>*/}
      {/*                        </Stack>*/}
      {/*                    </Box>*/}
      {/*                </Box>*/}
      {/*            </Grid>*/}
      {/*        </Grid>*/}
      {/*    </Box>*/}
      {/*    <IconButton*/}
      {/*        onClick={() => {*/}
      {/*            setOpen(false)*/}
      {/*        }}*/}
      {/*        sx={{*/}
      {/*            position: 'absolute',*/}
      {/*            zIndex: 999,*/}
      {/*            top: '-20px',*/}
      {/*            right: '-26px',*/}
      {/*            color: '#A1A1A1',*/}
      {/*            background: '#ffffff',*/}
      {/*            padding: '15px',*/}
      {/*            '&:hover': {*/}
      {/*                background: '#E0E2E4'*/}
      {/*            },*/}
      {/*            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px'*/}
      {/*        }}>*/}
      {/*        <CloseIcon/>*/}
      {/*    </IconButton>*/}
      {/*</Dialog>*/}
    </Grid>
  );
}

export default Home;
