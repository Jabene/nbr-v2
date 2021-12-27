import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import './Gallery.css'

const Gallery = () => {
  return (
    <ImageList
      sx={{width: '80vw', height: 2000, backgroundColor: 'white'}}
      cols={{xs: 1, md: 2}}
      rowHeight={550}>

      <ImageListItem sx={{m:'5px', minWidth: '300px'}}>
        <img
          src={`https://www.elegantweddinginvites.com/wedding-blog/wp-content/uploads/2020/07/beautiful-bridal-nails-for-your-wedding-look.jpg`}
          loading='lazy'
          className='gallery-img'/>
      </ImageListItem>

      <ImageListItem sx={{m:'5px'}}>
        <img
          src={`https://www.byrdie.com/thmb/j1MSmwNXLsoJ4YmuWJ4HZy-HXek=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/shortalmond-9d8a56f75e0a4a3f9c5c3faa929de715.jpg`}
          loading='lazy'
          className='gallery-img'/>
      </ImageListItem>

      <ImageListItem sx={{m:'5px'}}>
        <img
          src={`https://www.elegantweddinginvites.com/wedding-blog/wp-content/uploads/2020/07/beautiful-bridal-nails-for-your-wedding-look.jpg`}
          loading='lazy'
          className='gallery-img'/>
      </ImageListItem>

      <ImageListItem sx={{m:'5px'}}>
        <img
          src={`https://www.elegantweddinginvites.com/wedding-blog/wp-content/uploads/2020/07/beautiful-bridal-nails-for-your-wedding-look.jpg`}
          loading='lazy'
          className='gallery-img'/>
      </ImageListItem>

      <ImageListItem sx={{m:'5px'}}>
        <img
          src={`https://www.elegantweddinginvites.com/wedding-blog/wp-content/uploads/2020/07/beautiful-bridal-nails-for-your-wedding-look.jpg`}
          loading='lazy'
          className='gallery-img'/>
      </ImageListItem>

      <ImageListItem sx={{m:'5px'}}>
        <img
          src={`https://www.elegantweddinginvites.com/wedding-blog/wp-content/uploads/2020/07/beautiful-bridal-nails-for-your-wedding-look.jpg`}
          loading='lazy'
          className='gallery-img'/>
      </ImageListItem>

      <ImageListItem sx={{m:'5px'}}>
        <img
          src={`https://www.elegantweddinginvites.com/wedding-blog/wp-content/uploads/2020/07/beautiful-bridal-nails-for-your-wedding-look.jpg`}
          loading='lazy'
          className='gallery-img'/>
      </ImageListItem>

      <ImageListItem sx={{m:'5px'}}>
        <img
          src={`https://www.elegantweddinginvites.com/wedding-blog/wp-content/uploads/2020/07/beautiful-bridal-nails-for-your-wedding-look.jpg`}
          loading='lazy'
          className='gallery-img'/>
      </ImageListItem>

      <ImageListItem sx={{m:'5px'}}>
        <img
          src={`https://www.elegantweddinginvites.com/wedding-blog/wp-content/uploads/2020/07/beautiful-bridal-nails-for-your-wedding-look.jpg`}
          loading='lazy'
          className='gallery-img'/>
      </ImageListItem>

    </ImageList>
  )
}

export default Gallery
