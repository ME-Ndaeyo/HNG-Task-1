

export default function Layout(props) {
  return (
    <div>
      <main className='main'>{props.children}</main>
    </div>
  );
}