import { makeStyles } from '@material-ui/core/styles'
import { Typography, Container, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#242626',
    color: '#f8f9fa'
  },
  link: {
    // Remove all styling of 'a' tag
    color: 'inherit',
    textDecoration: 'inherit'
  }
}))

export default function Footer({ texts }) {
  const classes = useStyles()
  // const isMobile = useMediaQuery('(max-width:600px)')

  return (
    <div className={classes.root}>
      <Container>
        <Box sx={{ marginBottom: 2 }} />
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1">{'Freedom is not free.'}</Typography>
          <Box sx={{ marginBottom: 2 }} />
          <Typography variant="body1">{`© ${new Date().getFullYear()} YJ Hong`}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }} />
      </Container>
    </div>
  )
}
