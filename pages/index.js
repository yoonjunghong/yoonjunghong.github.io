import { Typography, Box, Container } from '@material-ui/core'

export default function HomePage() {
  return (
    <main>
      <Box
        sx={{
          backgroundImage: 'url("/assets/images/kevin-delvecchio-unsplash.jpg")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          width: '100%',
          height: '75vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography
          variant="h4"
          sx={{ backgroundColor: 'rgba(255, 255, 255, 0.32)', color: 'white', padding: 2 }}
        >
          {'YoonJung Hong Website'}
        </Typography>
      </Box>
      <Box sx={{ marginBottom: 8 }} />
      <Container sx={{ textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>
          {'YoonJung Hong Website'}
        </Typography>
        <Box sx={{ marginBottom: 4 }} />
      </Container>
      <Box sx={{ marginBottom: 16 }} />
    </main>
  )
}

// export async function getStaticProps({ params }) {
//   const announcement = await fetchStrapiAPI('/announcement')

//   return {
//     props: { announcement },
//     revalidate: 1
//   }
// }
