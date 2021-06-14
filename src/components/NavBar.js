import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './NavBar.css'

class BurgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <Menu right>
        <Link to="/" className="link dim white f6 f5-l dib mr3 mr4-l dark-gray menu-item">
          Home
        </Link>  
        <Link to="/table/fatalities" className="link dim white f6 f5-l dib mr3 mr4-l dark-gray menu-item">
          Fatalities
        </Link>
        <Link to="/table/pkomissions" className="link dim white f6 f5-l dib mr3 mr4-l dark-gray menu-item">
          PKO Missions
        </Link>
        <Link to="/table/contributionsbyrank" className="link dim white f6 f5-l dib mr3 mr4-l dark-gray menu-item">
          Contributions By Rank
        </Link>
        <Link to="/table/contributionsbygender" className="link dim white f6 f5-l dib mr3 mr4-l dark-gray menu-item">
          Contributions By Gender
        </Link>
      </Menu>
    )
  }
}

export default function NavBar()  {
  return (
    <div>
    <nav className="w-100 border-box pa3 ph5-l bt bb flex items-center justify-between">
      <Link to="/">
        <div className="inline-flex items-center">
          <img src={process.env.PUBLIC_URL + '/img/un_banner.png'} className="w4"  alt="Site Name" /> 
          <p className="ml2 dark-gray"> | Peace and Security Data Hub</p>
        </div>
      </Link>
      <div className="tr dn-m">
        <Link to="/" className="link dim dark -gray f6 f5-l dib mr3 mr4-l dark-gray">
          Home
        </Link>  
        <Link to="/chart" className="link dim dark -gray f6 f5-l dib mr3 mr4-l dark-gray">
          D3 Chart
        </Link>
        <Link to="/map" className="link dim dark -gray f6 f5-l dib mr3 mr4-l dark-gray">
          D3 Map
        </Link>
        <Link to="/vtable/fatalities" className="link dim dark -gray f6 f5-l dib mr3 mr4-l dark-gray">
          Fatalities
        </Link>
        <Link to="/vtable/pkomissions" className="link dim dark -gray f6 f5-l dib mr3 mr4-l dark-gray">
          PKO Missions
        </Link>
        <Link to="/vtable/contributionsbyrank" className="link dim dark -gray f6 f5-l dib mr3 mr4-l dark-gray">
          Contributions By Rank
        </Link>
        <Link to="/vtable/contributionsbygender" className="link dim dark -gray f6 f5-l dib mr3 mr4-l dark-gray">
          Contributions By Gender
        </Link>
      </div>
      <div className="db-s dn-l">
        <BurgerMenu />
      </div>
    </nav>
    </div>
  )
} 