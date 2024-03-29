 'react';
import NavSection from './NavSection';
import NavCollapsible from './NavCollapsible';
import NavItem from './NavItem';

const NAV_VARIANTS = {
    'section': NavSection,
    'collapsible': NavCollapsible,
    'nav-item': NavItem
};

const NavIdentifier = ({item,isNested}) => {
    if(!item) return null;

    if(item.type && ['section', 'collapsible', 'nav-item'].includes(item.type)) {
        const NavComponent = NAV_VARIANTS[item.type];
        return <NavComponent translate item={item} isNested={isNested} />
    }
};

export default NavIdentifier;