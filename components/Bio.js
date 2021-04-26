import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
    alignItems: 'center'
  },
  avatar: {
    borderRadius: '50%'
  }
}))

export default function Bio() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <img
        src="/assets/images/profile-photo.jpeg"
        width={75}
        height={75}
        className={classes.avatar}
      />
      <Box marginRight={4} />
      <Typography
        component="div"
        variant="body1"
        color="textPrimary"
        sx={{ whiteSpace: 'pre-line' }}
      >
        <Box fontWeight="fontWeightBold" display="inline">
          {'YoonJung Hong'}
        </Box>
        <br />
        {'UX Designer at LG Electronics since 2011'}
      </Typography>
    </div>
  )
}
