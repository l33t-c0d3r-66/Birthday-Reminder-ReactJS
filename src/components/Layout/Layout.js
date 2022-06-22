import cssClasses from './Layout.module.css';
import MainNavigation from './MainNavigation/MainNavigation';
function Layout (props) {
    return (
        <div>
            <MainNavigation todayWishes={props.wishes} />
            <main className={cssClasses.main}>
                {props.children}
            </main>
        </div> 
    );
}
export default Layout;