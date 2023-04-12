export default function MobileMenu(props) {
  return (<menu className={" bg-slate-800 md:hidden" }>
    {props.children}
  </menu>)
}
