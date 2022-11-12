import {Link} from 'react-router-dom'
import {FaQuestion} from 'react-icons/fa'

export const AboutIconLink = () => {
  return (
    <div className='about-link'>
      {/*<Link to={{
        pathname: './about',
        search: '?sort=name', // Adds query parameters to the url
        hash: '#hello' // Adds hash to the url
      }}>*/}
      <Link to='/about'>
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}